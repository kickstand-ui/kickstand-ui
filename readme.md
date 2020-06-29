<p align="center">
    <a href="https://kickstand-ui.com/">
    <img src="https://kickstand-ui.com/images/kickstand_logo.png" alt="kickstand logo" style="max-width:200px; width:100%;" />
    </a>
</p>

# Kickstand UI

## The Design System You Can Use Anywhere

[Check out the Docs &#8594;](https://kickstand-ui.com/)

## Installation

### Package Manager

```bash
npm install --save kickstand-ui

# or

yarn install kickstand-ui
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

- [Angular](/getting-started/framework-integrations/angular.html)
- [Ember](/getting-started/framework-integrations/ember.html)
- [React](/getting-started/framework-integrations/react.html)
- [Vue](/getting-started/framework-integrations/vue.html)

## CDN

You can also add it to your project by dropping a couple of tags.

```html
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.css" />
<script src="https://unpkg.com/kickstand-ui/dist/kickstand-ui.js"></script>
```