# AGENTS.md

React starter kit with `TypeScript`, `Redux Toolkit`, `React Router`,
`react-intl`, `Less`, and webpack 5. Use this file as the fast path for
understanding project structure, data flow, and developer workflow.

## Overview

- Entry point is `src/index.tsx`: it mounts `App`, imports global `less`,
  enables HMR, and registers `public/sw.js` on `window.load`.
- `src/app/ui/App.tsx` builds the shell in this order:
  `React.StrictMode` → Redux `Provider` → `LocaleProvider` → `BrowserRouter` →
  `Config` → `Layout` → route tree.
- `Config` and `LocaleProvider` are bootstrap gates: both return `null` until
  async bootstrap finishes, so UI intentionally waits for config + i18n data
  before rendering.
- Routes are small and module-owned: top-level routes live in
  `src/app/lib/constants.ts` (`home`, `example`), while feature-local
  subroutes live in module constants such as
  `src/modules/example/lib/constants.ts`.

## Architecture notes

### State and data flow

- Redux Toolkit is the shared state boundary. `src/app/lib/reducers.ts`
  combines module reducers; add new slices there and update app store/types
  under `src/app/lib`.
- Use the typed Redux hooks from `src/app/lib/hooks.ts` (`useAppDispatch`,
  `useAppSelector`); `createAppSelector` is also available there when you need
  typed memoized selectors.
- Async work is implemented as React hooks, not thunks. Examples:
  `useConfigGet`, `useExampleGetList`, `useLocaleGetMessages` in
  `src/modules/*/lib/actions.ts`.
- Async hooks follow the same pattern: set status → call `api.requestLocal(...)`
  or `api.request(...)` → dispatch slice action → set status success/error.
- Request status is centralized in the `status` slice and keyed by
  `sliceAction.type` (`selectStatusItem(configActions.update.type)`,
  `selectStatusItem(exampleActions.getList.type)`). Reuse that pattern instead
  of feature-specific loading flags.
- Collection data is commonly normalized into `{data, list}`. See
  `src/modules/example/lib/reducers.ts` using `getNormalize()` and selectors
  rebuilding arrays with `getList()` from `src/modules/common/lib/selectors.ts`.

### Config, API, and external integrations

- `src/modules/common/lib/api.ts` is the only fetch wrapper. `Api.host` is
  mutable global state populated by `Config` from `/local/api/v1/config.json`;
  normal remote requests should go through `api.request()`.
- Mock/bootstrap data is served from `public/local/api/v1/*.json` and fetched
  through `api.requestLocal(...)`, which prefixes `/local`.
- Locale state is split across Redux + `localStorage`: `useLocaleSetCurrent()`
  writes `currentLocale`, and `useLocaleCurrent()` falls back to storage then
  `defaultLocale` (`ru`).
- Text should go through `src/modules/locale/ui/Message.tsx` or
  `useGetMessage()` from `src/modules/locale/lib/useGetMessage.ts`, with keys
  stored in locale JSON files like `public/local/api/v1/locale-en.json`.
- SVG icons are loaded by name (`<SvgIcon name="logo" />`) from
  `src/icons/*.svg`; `src/modules/common/lib/iconMap.ts` builds the allowed
  name → `viewBox` map with `require.context(...)`, and missing `viewBox` values
  only surface as dev warnings. Webpack bundles the sprite into `sprite.svg` via
  `config/svg.js`.

### Codebase conventions

- Imports use the `src` alias (`import {App} from 'src/app/ui/App'`),
  wired through `tsconfig.json#compilerOptions.paths` and webpack
  `resolve.alias.src` in `config/base.js`.
- Source code is split by responsibility: `ui/` holds React components
  (`src/app/ui/App.tsx`, `src/modules/example/ui/Example.tsx`), while `lib/`
  holds state, selectors, constants, and helpers (`src/app/lib/store.ts`,
  `src/modules/example/lib/actions.ts`). Some shell-only modules such as
  `src/modules/home` and `src/modules/layout` are `ui/`-only.
- Component styles live beside components and are imported for side effects (
  `import './Header.less'`). Shared global styles are composed once in
  `src/styles/index.less`.
- Existing UI naming is BEM-like (`Layout__Header`, `ExampleList__Cell`) rather
  than CSS modules, even though `types/index.d.ts` declares `*.less` modules.
- Many components intentionally render `null` until status becomes
  `Status.success`; preserve that behavior when extending bootstrapping flows.
- `src/modules/common/ui/Scroll.tsx` is part of the layout shell;
  changes there affect most pages.

## Developer workflow

- Install dependencies first: `npm ci`.
- Required toolchain is `Node.js >= 20.19.0` and `npm >= 10.0.0` (
  `package.json#engines`).
- Verified production build: `npm run build`. It writes the bundle to `www/` and
  copies everything from `public/` there via `CopyWebpackPlugin`.
- Dev server command is `npm run dev`; `config/base.js` binds it to
  `0.0.0.0:8000` with `historyApiFallback: true`.
- Production webpack serve command is `npm run start`.
- There are no test files or test scripts in this repo right now; validation is
  mainly `npm run typecheck`, linting, and build-based checks.
- Run `npm run typecheck` when editing `.ts`/`.tsx`; webpack transpiles through
  `babel-loader` in `config/script.js`, so `npm run build` does not replace
  TypeScript checking.
- `npm run eslint` runs ESLint 9 with flat config from `eslint.config.cjs` and
  covers `.js,.jsx,.ts,.tsx` under `src`.
- `npm run stylelint` is available and uses the root `.stylelintrc` with
  `stylelint-config-standard-less`.
- `npm run prettier` formats the whole repo (
  `prettier --write . --ignore-unknown`); use it for Markdown/JSON/config files
  that are outside the ESLint/Stylelint globs.
- Both lint scripts run with `--fix`, and the same autofixers are wired into
  `lint-staged`/Husky pre-commit for staged `!(*min).{js,jsx,ts,tsx}` and
  `!(*min).{css,less}` files.
- `package.json#overrides` contains security-driven transitive pins; keep them
  unless you intentionally rework the affected toolchain.
- If `npm audit` still reports residual tooling issues, fixing those further
  likely requires package replacement, not just version bumps.

## Adding new modules

- Mirror the existing module split from `README.md`: `ui/` plus `lib/` (
  actions/reducers/selectors/types/constants), and optional `api/`.
- `src/modules/example` is the reference module for new features; use it as the
  template for structure, routing, async hooks, reducers, selectors, and
  normalized list state.
- Start from `src/modules/example/ui/Example.tsx` for route composition,
  `src/modules/example/lib/actions.ts` for async hook shape,
  `src/modules/example/lib/reducers.ts` for normalized slice structure, and
  `src/modules/example/lib/selectors.ts` for selector patterns.
- Put route constants in the module, async hooks in `lib/actions.ts`, state
  shape in `lib/reducers.ts`, and selectors in `lib/selectors.ts`.
- If the module loads remote/mock data, wire status updates through
  `useStatusSet(action.type)` and register the reducer in
  `src/app/lib/reducers.ts`.
- If the module should be reachable from the header navigation, also extend
  `src/modules/layout/ui/Menu.tsx` (`Menu.defaultProps.list`) with its
  label/path.
- After adding a new slice, check whether app-level store/types or typed hooks
  also need updates under `src/app/lib`.

