# Frontend

Frontend apps and resources for Vermont Mutual products

## Usage

Run the app in development mode

```
npm run dev
```

Run storybook tool

```
npm run storybook
```

Export a static build of the app to `./dist/`

```
npm run build && npm run export
```

Export a static build of the storybook tool to `./dist/storybook`

```
npm run build-storybook
```

## Dependencies

We choose a small number of dependencies but each is carefully selected to deliver a large amount of value to developers. Each added dependency can increase to the overall incidental complexity of working on the application so, for each dependency, we take the time to add a summary and provide links to resources for the benefit of current and future developers.

### Runtime

#### [Next.js](https://nextjs.org/)

A ReactJS "distribution" that provides tooling, routing, code-splitting and other higher-level primitives on top of the ReactJS library. We use the "static export" feature to generate a static single page app. [See docs](https://nextjs.org/docs)

#### [ReactJS](https://reactjs.org/)

Lower-level library and view framework for building component-based UIs. [See docs](https://reactjs.org/docs/getting-started.html)

#### [Lodash](https://lodash.com/)

A utility library for JS. A large number of modular helpers for a wide range of uses. [See docs](https://lodash.com/docs/4)

#### [Material-UI](https://material-ui.com/)

A design system, component library, CSS-in-JS library, and UI toolkit for ReactJS. [See docs](https://material-ui.com/)

### Development

#### [Storybook](https://storybook.js.org/)

A component browser and development tool for building components in isolation. [See docs](https://storybook.js.org/docs/basics/introduction/)

#### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

A library of tools to improve the ReactJS testing experience. [See docs](https://testing-library.com/docs/react-testing-library/intro)

#### [Jest](https://jestjs.io/docs/en/getting-started)

A fast, friendly test runner. [See docs](https://jestjs.io/docs/en/getting-started)

#### [Prettier Standard](https://github.com/sheerun/prettier-standard)

Formats with Prettier and lints with ESLint+Standard. [See docs](https://github.com/sheerun/prettier-standard)

When committing, linting and formatting will be run automatically. For best results install the plugin for you editor:

- [Vim](https://github.com/sheerun/prettier-standard#vim)
- [VSCode](https://marketplace.visualstudio.com/items?itemName=numso.prettier-standard-vscode)
- [Sublime Text](https://github.com/sheerun/prettier-standard#sublime-text-3)

See also:

- [Standard](https://standardjs.com/): JavaScript style guide, linter, and formatter
- [Prettier](https://prettier.io/): An opinionated JS formatter

## Resources

### Mockups

Design view

- Screens: https://xd.adobe.com/view/20158210-b7b4-4cf3-46c7-37935a3bc152-5624/grid
- Style guide: https://xd.adobe.com/view/385a6b3f-dddb-4701-699d-2a7ad2cb767e-4e6b/grid

Spec view

- Screens: https://xd.adobe.com/view/572508f9-06fc-44f9-52bd-d877649b16e7-2114/grid
- Style guide: https://xd.adobe.com/view/572508f9-06fc-44f9-52bd-d877649b16e7-2114/grid
