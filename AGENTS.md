# AGENTS.md

## Big picture
- Entry point is `src/index.tsx`: it mounts `App`, imports global `less`, enables HMR, and registers `public/sw.js` on `window.load`.
- `src/app/components/App.tsx` builds the shell in this order: Redux `Provider` → `LocaleProvider` → `BrowserRouter` → `Config` → `Layout` → route tree.
- `Config` and `LocaleProvider` are bootstrap gates: both return `null` until async bootstrap finishes, so UI intentionally waits for config + i18n data before rendering.
- Routes are small and module-owned: top-level routes live in `src/app/model/constants.ts`, while feature-local subroutes live in module constants such as `src/modules/example/model/constants.ts`.

## State and data flow
- Redux Toolkit is the shared state boundary. `src/app/model/reducers.ts` combines module reducers; add new slices there and update app types/hooks under `src/app/model` and `src/app/lib/hooks.ts`.
- Async work is implemented as React hooks, not thunks. Examples: `useConfigGet`, `useExampleGetList`, `useLocaleGetMessages` in `src/modules/*/model/actions.ts`.
- Async hooks follow the same pattern: set status → call `api.requestLocal(...)` or `api.request(...)` → dispatch slice action → set status success/error.
- Request status is centralized in the `status` slice and keyed by `sliceAction.type` (`selectStatusItem(configActions.update.type)`, `selectStatusItem(exampleActions.getList.type)`). Reuse that pattern instead of feature-specific loading flags.
- Collection data is commonly normalized into `{data, list}`. See `src/modules/example/model/reducers.ts` using `getNormalize()` and selectors rebuilding arrays with `getList()` from `src/modules/common/lib/selectors.ts`.

## Config, API, and external integrations
- `src/modules/common/lib/api.ts` is the only fetch wrapper. `Api.host` is mutable global state populated by `Config` from `/local/api/v1/config.json`; normal remote requests should go through `api.request()`.
- Mock/bootstrap data is served from `public/local/api/v1/*.json` and fetched through `api.requestLocal(...)`, which prefixes `/local`.
- Locale state is split across Redux + `localStorage`: `useLocaleSetCurrent()` writes `currentLocale`, and `useLocaleCurrent()` falls back to storage then `defaultLocale` (`ru`).
- Text should go through `src/modules/locale/components/Message.tsx` or `useMessage()`, with keys stored in locale JSON files like `public/local/api/v1/locale-en.json`.
- SVG icons are dynamically imported by name (`<SvgIcon name="logo" />`) from `src/icons/*.svg`; webpack bundles them into `sprite.svg` via `config/svg.js`.

## Codebase conventions
- Imports are absolute from `src` (`import {App} from 'app/components/App'`) because `tsconfig.json` sets `baseUrl: "src"` and webpack resolves `modules: ['src', 'node_modules']`.
- Component styles live beside components and are imported for side effects (`import './Header.less'`). Shared global styles are composed once in `src/styles/index.less`.
- Existing UI naming is BEM-like (`Layout__Header`, `ExampleList__Cell`) rather than CSS modules, even though `types/index.d.ts` declares `*.less` modules.
- Many components intentionally render `null` until status becomes `Status.success`; preserve that behavior when extending bootstrapping flows.
- `src/modules/common/components/Scroll.tsx` is part of the layout shell; changes there affect most pages.

## Developer workflows
- Install dependencies first: `npm ci`.
- Verified production build: `npm run build`. It writes the bundle to `www/` and copies everything from `public/` there via `CopyWebpackPlugin`.
- Dev server command is `npm run dev`; `config/base.js` binds it to `0.0.0.0:8000` with `historyApiFallback: true`.
- There are no test files or test scripts in this repo right now; validation is mainly build-based.
- `npm run eslint` only targets `.js,.jsx` under `src`, so TypeScript changes are mainly checked by the build/TypeScript compiler.
- `npm run stylelint` is declared in `package.json`, but `stylelint` is not in `devDependencies`; verify local tooling before relying on it.

## When adding a new feature module
- Mirror the existing module split from `README.md`: `components/`, `model/` (actions/reducers/selectors/types/constants), and optional `api/`.
- `src/modules/example` is the reference module for new features; use it as the template for structure, routing, async hooks, reducers, selectors, and normalized list state.
- Start from `src/modules/example/components/Example.tsx` for route composition, `src/modules/example/model/actions.ts` for async hook shape, `src/modules/example/model/reducers.ts` for normalized slice structure, and `src/modules/example/model/selectors.ts` for selector patterns.
- Put route constants in the module, async hooks in `model/actions.ts`, state shape in `model/reducers.ts`, and selectors in `model/selectors.ts`.
- If the module loads remote/mock data, wire status updates through `useStatusSet(action.type)` and register the reducer in `src/app/model/reducers.ts`.
- After adding a new slice, check whether app-level types or typed hooks also need updates under `src/app/model` and `src/app/lib/hooks.ts`.

