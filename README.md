# ReactStarterKit

## English

A lightweight starter kit for React applications with `TypeScript`,
`Redux Toolkit`, `React Router`, `react-intl`, `Less`, and webpack 5.

For AI coding agents, see `AGENTS.md` for the compact project guide focused on
architecture, conventions, and workflow.

### Overview

The project already includes:

- a base app shell with layout and routing;
- configuration bootstrap via local `config.json`;
- i18n via `react-intl` and locale JSON files;
- a sample feature module in `src/modules/example`;
- build, dev-server, and linting workflows for day-to-day development.

### Features

- `React 19` + `TypeScript 6`
- `Redux Toolkit` for shared state
- `React Router 7` for routing
- `react-intl 10` for localization
- `Less` + PostCSS for styling
- `webpack 5` for dev/build workflow
- ESLint 9 flat config + Stylelint 17

### Requirements

- `Node.js >= 20.19.0`
- `npm >= 10.0.0`

If Node.js is not installed yet:

- [How to install Node.js](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-18-04-ru#Установка-при-помощи-nvm)

### Quick start

#### Install dependencies

```bash
npm ci
```

#### Run in development

The dev server runs on `http://0.0.0.0:8000/`.

```bash
npm run dev
```

#### Production build

```bash
npm run build
```

The build output is written to `www/`. Contents of `public/` are copied there
automatically.

#### Production serve

```bash
npm run start
```

### Scripts

| Command             | Description                                    |
|---------------------|------------------------------------------------|
| `npm run dev`       | Run webpack dev-server in development mode     |
| `npm run build`     | Build the production bundle into `www/`        |
| `npm run start`     | Run webpack serve in production mode           |
| `npm run typecheck` | Run TypeScript checking without emitting files |
| `npm run eslint`    | Lint and auto-fix `.js,.jsx,.ts,.tsx` in `src` |
| `npm run stylelint` | Lint and auto-fix `.css,.less`                 |

### Project structure

#### Main directories

- `src/app` — app shell, store, root routes, and app-level types;
- `src/modules` — feature modules and shared modules;
- `src/styles` — global styles and Less mixins;
- `src/icons` — SVG icons for sprite-based loading;
- `public` — static assets, service worker, and local bootstrap/mock JSON;
- `config` — split webpack configuration.

#### Feature module structure

A new module usually follows this structure:

- `components/` — UI components and route composition;
- `model/actions.ts` — async hooks and side effects;
- `model/constants.ts` — route/constants;
- `model/reducers.ts` — slice/reducer;
- `model/selectors.ts` — selectors;
- `model/types.ts` — types;
- `api/` — optional API-specific code.

The main reference implementation for new modules is `src/modules/example`.

### Architecture notes

#### App shell

- The entry point is `src/index.tsx`.
- The main application composition lives in `src/app/components/App.tsx`.
- The shell is composed in this order:
  - `React.StrictMode`
  - `ReduxProvider`
  - `LocaleProvider`
  - `BrowserRouter`
  - `Config`
  - `Layout`
  - route tree

#### Bootstrap flow

- `Config` loads `/local/api/v1/config.json` and populates `Api.host`.
- `LocaleProvider` loads the locale list and messages before the UI renders.
- Both bootstrap components return `null` until async initialization is
  complete.

#### State and async flow

- Shared state is built with `Redux Toolkit`.
- Use the typed Redux helpers from `src/app/lib/hooks.ts` (`useAppDispatch`,
  `useAppSelector`) instead of raw `react-redux` hooks.
- Async logic is implemented with hooks in `model/actions.ts`, not thunks.
- Request statuses are centralized in the `status` slice and read via
  `selectStatusItem(action.type)`.
- Collections are often stored in normalized `{data, list}` form.

### Styling and assets

- Imports use the `src` alias (`import {App} from 'src/app/components/App'`),
  wired through `tsconfig.json#compilerOptions.paths` and webpack
  `resolve.alias.src` in `config/base.js`.
- Component styles live beside components and use side-effect imports.
- Global styles are imported once in `src/styles/index.less`.
- SVG icons are loaded by name through
  `src/modules/common/components/SvgIcon.tsx`;
  `src/modules/common/lib/iconMap.ts` builds the allowed name → `viewBox` map
  with `require.context(...)`, and missing `viewBox` values only show as dev
  warnings. Webpack bundles the sprite into `sprite.svg`.

### Localization

- Text rendering goes through `src/modules/locale/components/Message.tsx` or
  `useMessage()`.
- Locale files live in `public/local/api/v1/`.
- Current locale is stored both in Redux and `localStorage`.

### Adding new modules

When adding a new feature module, you usually need to:

1. Repeat the structure of `src/modules/example`.
2. Add the reducer to `src/app/model/reducers.ts`.
3. Check whether app-level types/hooks also need updates in `src/app/model` and
   `src/app/lib/hooks.ts`.
4. If the module loads data, use the shared status pattern via
   `useStatusSet(action.type)`.
5. If the module should appear in the header navigation, also extend
   `src/modules/layout/components/Menu.tsx` (`Menu.defaultProps.list`).

### Validation

The repository does not currently include a dedicated test suite, so the main
validation loop is:

```bash
npm run typecheck
npm run eslint
npm run stylelint
npm run build
```

Run `npm run typecheck` when editing `.ts`/`.tsx`; webpack transpiles through
`babel-loader` in `config/script.js`, so `npm run build` does not replace
TypeScript checking.

Both lint scripts run with `--fix`, and the same autofixers are wired into
`lint-staged`/Husky pre-commit for staged `!(*min).{js,jsx,ts,tsx}` and
`!(*min).{css,less}` files.

### Known limitations

- `npm audit` may still report residual vulnerabilities in older transitive
  dependencies from the current tooling stack.
- Reducing the audit count further will likely require package/tooling
  replacement rather than simple version bumps.

### License

The project is marked as `UNLICENSED` in `package.json`.

---

## Русский

Легковесный starter kit для React-приложений с `TypeScript`, `Redux Toolkit`,
`React Router`, `react-intl`, `Less` и webpack 5.

Для AI coding agents см. `AGENTS.md` — это компактный гид по архитектуре,
конвенциям и рабочему процессу проекта.

### Обзор

Проект уже содержит:

- базовый app shell с layout и роутингом;
- конфигурационный bootstrap через локальный `config.json`;
- i18n через `react-intl` и locale JSON-файлы;
- пример feature module в `src/modules/example`;
- сборку, dev-server и линтеры для повседневной разработки.

### Возможности

- `React 19` + `TypeScript 6`
- `Redux Toolkit` для shared state
- `React Router 7` для маршрутизации
- `react-intl 10` для локализации
- `Less` + PostCSS для стилей
- `webpack 5` для dev/build workflow
- ESLint 9 flat config + Stylelint 17

### Требования

- `Node.js >= 20.19.0`
- `npm >= 10.0.0`

Если Node.js еще не установлен:

- [Как установить Node.js](https://www.digitalocean.com/community/tutorials/node-js-ubuntu-18-04-ru#Установка-при-помощи-nvm)

### Быстрый старт

#### Установка зависимостей

```bash
npm ci
```

#### Запуск в режиме разработки

Dev-server поднимается на `http://0.0.0.0:8000/`.

```bash
npm run dev
```

#### Production сборка

```bash
npm run build
```

Сборка записывается в директорию `www/`. Содержимое `public/` копируется туда
автоматически.

#### Production запуск

```bash
npm run start
```

### Скрипты

| Команда             | Назначение                                             |
|---------------------|--------------------------------------------------------|
| `npm run dev`       | Запуск webpack dev-server в development-режиме         |
| `npm run build`     | Production build в `www/`                              |
| `npm run start`     | Запуск webpack serve в production-режиме               |
| `npm run typecheck` | TypeScript-проверка без генерации файлов               |
| `npm run eslint`    | Проверка и автоисправление `.js,.jsx,.ts,.tsx` в `src` |
| `npm run stylelint` | Проверка и автоисправление `.css,.less`                |

### Структура проекта

#### Основные директории

- `src/app` — app shell, store, root routes и app-level types;
- `src/modules` — feature modules и shared modules;
- `src/styles` — глобальные стили и Less mixins;
- `src/icons` — SVG icons для sprite-based загрузки;
- `public` — static assets, service worker и локальные JSON для bootstrap/mock
  данных;
- `config` — webpack-конфигурация, разбитая по частям.

#### Структура feature module

Новый модуль обычно повторяет структуру:

- `components/` — UI-компоненты и route composition;
- `model/actions.ts` — async hooks и side effects;
- `model/constants.ts` — route/constants;
- `model/reducers.ts` — slice/reducer;
- `model/selectors.ts` — selectors;
- `model/types.ts` — типы;
- `api/` — optional API-specific code.

Основной reference implementation для новых модулей — `src/modules/example`.

### Архитектурные заметки

#### App shell

- Точка входа — `src/index.tsx`.
- Основная композиция приложения находится в `src/app/components/App.tsx`.
- Shell собирается в таком порядке:
  - `React.StrictMode`
  - Redux `Provider`
  - `LocaleProvider`
  - `BrowserRouter`
  - `Config`
  - `Layout`
  - route tree

#### Bootstrap flow

- `Config` загружает `/local/api/v1/config.json` и заполняет `Api.host`.
- `LocaleProvider` загружает список локалей и сообщения до рендера UI.
- Оба bootstrap-компонента возвращают `null`, пока async initialization не
  завершится.

#### State и async flow

- Shared state построен на `Redux Toolkit`.
- Используйте типизированные Redux-хелперы из `src/app/lib/hooks.ts` (
  `useAppDispatch`, `useAppSelector`) вместо raw hooks из `react-redux`.
- Async логика реализована через hooks в `model/actions.ts`, а не через thunks.
- Статусы запросов централизованы в slice `status` и читаются через
  `selectStatusItem(action.type)`.
- Коллекции часто хранятся в нормализованном формате `{data, list}`.

### Работа со стилями и ассетами

- Импорты используют alias `src` (`import {App} from 'src/app/components/App'`),
  который настроен через `tsconfig.json#compilerOptions.paths` и webpack
  `resolve.alias.src` в `config/base.js`.
- Стили компонентов лежат рядом с компонентами и подключаются через side-effect
  imports.
- Глобальные стили подключаются один раз в `src/styles/index.less`.
- SVG icons грузятся по имени через `src/modules/common/components/SvgIcon.tsx`;
  `src/modules/common/lib/iconMap.ts` строит карту допустимых имен → `viewBox`
  через `require.context(...)`, а отсутствие `viewBox` проявляется только как
  dev warning. Webpack собирает sprite в `sprite.svg`.

### Локализация

- Компонентный доступ к текстам идет через
  `src/modules/locale/components/Message.tsx` или `useMessage()`.
- Locale-файлы лежат в `public/local/api/v1/`.
- Текущая locale хранится и в Redux store, и в `localStorage`.

### Разработка новых модулей

При добавлении нового feature module обычно нужно:

1. Повторить структуру `src/modules/example`.
2. Добавить reducer в `src/app/model/reducers.ts`.
3. Проверить, нужны ли обновления app-level types/hooks в `src/app/model` и
   `src/app/lib/hooks.ts`.
4. Если модуль загружает данные, использовать общий status pattern через
   `useStatusSet(action.type)`.
5. Если модуль должен появиться в header navigation, также обновить
   `src/modules/layout/components/Menu.tsx` (`Menu.defaultProps.list`).

### Проверка изменений

В репозитории сейчас нет отдельного test suite, поэтому основной цикл проверки
такой:

```bash
npm run typecheck
npm run eslint
npm run stylelint
npm run build
```

При изменениях в `.ts`/`.tsx` запускайте `npm run typecheck`; webpack
транспилирует TypeScript через `babel-loader` в `config/script.js`, поэтому
`npm run build` не заменяет полноценную TypeScript-проверку.

Оба lint-скрипта запускаются с `--fix`, и те же autofixer-ы подключены в
`lint-staged`/Husky pre-commit для staged `!(*min).{js,jsx,ts,tsx}` и
`!(*min).{css,less}` файлов.

### Известные ограничения

- `npm audit` все еще может показывать остаточные уязвимости в старых transitive
  dependencies из текущего tooling stack.
- Дальнейшее снижение `audit` потребует не просто version bump, а замены
  отдельных пакетов/tooling.

### Лицензия

Проект помечен как `UNLICENSED` в `package.json`.

