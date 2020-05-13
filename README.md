Frontend

Motivation
Vermont Mutual sells insurance plans to customers through licensed third party insurance agencies like Liberty Mutual. Customers who want homeowner's insurance call licensed agents to get policy quotes and to submit applications for issuance of policies. The licensed insurance agents who speak to clients and sell Vermont Mutual's insurance plans also sell other insurance company's plans. For this reason, it's beneficial to make the Vermont Mutual quote generating experience as simple as possible for those agents. This application provides a simple interface allowing licensed insurance agents to generate Vermont Mutual homeowner's insurance quotes for clients and submit applications for issuance of Vermont Mutual homeowner's insurance policies.

Architecture

At the time of this writing the application is an SPA built with NextJS and exported to a static application. See static export docs for details.
The application sits in the root of the repo and follows NextJS idioms/conventions. As the application grows and/or we end up with additional discreet applications/resources we can move to Yarn and leverage the "workspaces" feature to house multiple packages inside this repo (moving the current application from the project "root" to e.g. ./packages/homeowners.


Prerequisites

NodeJS 12 LTS

NodeJS is used for all development and build processes. We should adopt LTS versions as they change.

Resources

Install
Docs
Releases


Usage
package.json scripts are used for all development and build tasks. See ./package.json or npm-run docs.

Tasks
Install
yarn install
Run the app in development mode
yarn dev
Run test suite
yarn test
Watch test suite
yarn test:watch
Run storybook tool
yarn storybook
Export a static build of the app to ./export-out/
yarn build && yarn export
Export a static build of the storybook tool to ./storybook-out
npm run build-storybook

Dependencies
We choose a small number of dependencies but each is carefully selected to deliver a large amount of value to developers. Each added dependency can increase to the overall incidental complexity of working on the application so, for each dependency, we take the time to add a summary and provide links to resources for the benefit of current and future developers.

Runtime

Next.js

A ReactJS "distribution" that provides tooling, routing, code-splitting and other higher-level primitives on top of the ReactJS library. We use the "static export" feature to generate a static single page app. See docs

ReactJS

Lower-level library and view framework for building component-based UIs. See docs

Lodash

A utility library for JS. A large number of modular helpers for a wide range of uses. See docs

Material-UI

A design system, component library, CSS-in-JS library, and UI toolkit for ReactJS. See docs
We also use [Material-UI Pickers]https://material-ui-pickers.dev/ for date/time inputs. For date manipulation this @material/ui integrates with date-fns.

Development

Typescript

TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. See docs
If you use Visual Studio Code the typescript development experience should be perfect out-of-the-box. For other editors explore the following plugins:

Sublime Text
Vim

Syntax
Types




Storybook

A component browser and development tool for building components in isolation. See docs

React Testing Library

A library of tools to improve the ReactJS testing experience. See docs

Jest

A fast, friendly test runner. See docs

Prettier

An opinionated code formatter See docs https://github.com/sheerun/prettier-standard
Formatting will be run automatically when committing. For best results configure editor integration:

Vim
VSCode
Sublime Text


Eslint

A configurable linting solution See docs
Linting will be run automatically when committing. For best results configure editor integration:

All editors


Deployments and preview builds
CI is configured to build every push and deploy it to S3. This responsibility is shared between ./.gitlab-ci.yml and ./infra/export-to-s3.js.

CI creates a static site for every push and creates a link to it in the merge request. These static sites are deleted automatically after a year but can always be recreated via the GitLab pipeline UI.
Creating a tag and pushing it causes a production release to be created which can be promoted to a production environment via the GitLab pipeline UI. Tagged versions are kept forever and rollbacks can be accomplished by redeploying any previous version.


Mockups
Design view

Screens: https://xd.adobe.com/view/20158210-b7b4-4cf3-46c7-37935a3bc152-5624/grid

Style guide: https://xd.adobe.com/view/385a6b3f-dddb-4701-699d-2a7ad2cb767e-4e6b/grid


Spec view

Screens: https://xd.adobe.com/view/572508f9-06fc-44f9-52bd-d877649b16e7-2114/grid

Style guide: https://xd.adobe.com/view/572508f9-06fc-44f9-52bd-d877649b16e7-2114/grid
password: Vermont2020
