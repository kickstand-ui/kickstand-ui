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
<!-- global styles and utility classes -->
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui@beta/dist/kickstand-ui/kickstand-ui.css" />

<!-- scripts for browsers that support ES modules -->
<script type="module" src="https://unpkg.com/kickstand-ui@beta/dist/kickstand-ui/kickstand-ui.esm.js"></script>
<!-- scripts for browsers that do not support ES modules (legacy browsers) -->
<script nomodule src="https://unpkg.com/kickstand-ui@beta/dist/kickstand-ui/kickstand-ui.js"></script>
```
(_For the best user experience, be sure to include both `script` tags._)

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

Kickstand UI was written using [SASS](https://sass-lang.com/). Using SASS is not required to use and customize Kickstand UI for your needs, but we have created some great [SASS tools](https://kickstand-ui.com/design-tokens/overview.html) to really accelerate the development process. You can import them into your project from `kickstand-ui/src/scss/styles.scss`.

If you are planning on using the compiled CSS, you can find it at `kickstand-ui/dist/kickstand-ui/kickstand-ui.css`.

## Browser Support

All of Kickstand UI's components are built using standards-based [web components](https://www.webcomponents.org/introduction). Browser support has greatly improved over the years. For features that are not fully supported, polyfills have been added (which will be included as-needed) to provide a great experience no matter what browser you are using.

Supported browsers include:

- **Chrome**
- **Chromium-based browsers** (this includes browsers like _Brave_, the new _Microsoft Edge_, and _Vivaldi_)
- **Firefox**, **Safari**
- **Opera**
- **Microsoft Edge** (legacy)
- **Internet Explorer 11**.

## Framework Integrations

Kickstand UI is built with native web components which makes it framework agnostic! You can implement it in any of your projects regardless of the framework you are using ([add to your project](https://kickstand-ui.com/getting-started/framework-integrations/overview.html)).

Once you have installed Kickstand UI, check out the documentation on how to implement it into your favorite framework (or none at all!):

- [JavaScript](https://kickstand-ui.com/getting-started/installation.html)
- [Angular](https://kickstand-ui.com/getting-started/framework-integrations/angular.html)
- [Ember](https://kickstand-ui.com//getting-started/framework-integrations/ember.html)
- [React](https://kickstand-ui.com//getting-started/framework-integrations/react.html)
- [Vue](https://kickstand-ui.com//getting-started/framework-integrations/vue.html)
