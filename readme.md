<p align="center">
    <a href="https://kickstand-ui.com/">
    <img src="https://kickstand-ui.com/images/kickstand_card.png" alt="kickstand logo" style="max-width: 700px; width:100%;" />
    </a>
</p>

# Kickstand UI

## The Design System You Can Use Everywhere

Kickstand UI is a Design system and pattern library built with Web Components, so you can use them anywhere without having to worry about framework compatibility (we have worked hard to make sure of that)!

[Check out the Docs &#8594;](https://kickstand-ui.com/)

## Installation

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.css" />
<script src="https://unpkg.com/kickstand-ui/dist/kickstand-ui.js"></script>
```

### Package Manager

```bash
npm install --save kickstand-ui

# or

yarn add kickstand-ui
```

### Add To Your Project

```js
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';

// Apply the polyfills and bind the custom elements to the window object
applyPolyfills().then(() => {
    defineCustomElements();
});
```

### Styles

Kickstand UI was written using [SASS](https://sass-lang.com/) and to take advantage of all of the built-in tooling and customization capabilities you should plan on using it in your project. You can import them into your project from `kickstand-ui/src/scss/styles.scss`. If not you can always use the compiled CSS located in `kickstand-ui/dist/kickstand-ui/kickstand-ui.css`.

## Framework Integrations

Once you have installed Kickstand UI, check out the documentation on how to implement it into your favorite framework:

- [JavaScript](https://kickstand-ui.com/getting-started/installation.html)
- [Angular](https://kickstand-ui.com/getting-started/framework-integrations/angular.html)
- [Ember](https://kickstand-ui.com//getting-started/framework-integrations/ember.html)
- [React](https://kickstand-ui.com//getting-started/framework-integrations/react.html)
- [Vue](https://kickstand-ui.com//getting-started/framework-integrations/vue.html)
