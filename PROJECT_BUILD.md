# Kickstand UI

Kickstand UI is a design system for building web applications. It is built using native web components to ensure its cross-platform compatibility.

## Running the Project

Install dependencies:

```bash
npm install
```

Run Storybook:

```bash
npm run dev:storybook
```

Build project for production:

```bash
npm run build
```

To run the unit tests for the components:

```bash
npm test
```

Run basic dev mode (should rarely be used):

```bash
npm dev
```

## Solution Architecture

This design system is built using [Stencil](https://stenciljs.com/) (a compiler for building native web components) and [Clarion](https://projectclarion.com) (a CSS framework for building design systems).

Components are built and tested using [Storybook](https://storybook.js.org/).


<!-- ## Using this component

### Script tag

- [Publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Put a script tag similar to this `<script src='https://unpkg.com/my-component@0.0.1/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script src='node_modules/my-component/dist/mycomponent.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc -->
