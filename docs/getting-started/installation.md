# Installation

## Package Manager

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

### Framework Integrations

Once you have installed Kickstand UI, check out the documentation on how to implement it into your favorite framework:

- [Angular](/getting-started/framework-integrations/angular.html)
- [Ember](/getting-started/framework-integrations/ember.html)
- [React](/getting-started/framework-integrations/react.html)
- [Vue](/getting-started/framework-integrations/vue.html)

## CDN

You can also add it to your project by dropping a couple of tags.

```html
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui/dist/kickstand-ui.css" />
<script src="https://unpkg.com/kickstand-ui/dist/kickstand-ui.js"></script>
```
