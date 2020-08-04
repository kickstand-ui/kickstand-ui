# Installation

## CDN

Installing Kickstand UI is as easy as adding a few tags to your page.

```html
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.css" />
<script src="https://unpkg.com/kickstand-ui/dist/kickstand-ui.js"></script>
```

## Package Manager

If you are using build tools or a framework, you can add it to your project as an NPM package.

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

<div class="display-flex space-around my-lg">
    <img src="/images/frameworks/HTML5.JPG" alt="HTML5" title="HTML5" style="width:auto; height:80px;" />
    <img src="/images/frameworks/vuejs.png" alt="Vuejs" title="Vuejs" style="width:auto; height:80px;" />
    <img src="/images/frameworks/react.png" alt="React" title="React" style="width:auto; height:80px;" />
    <img src="/images/frameworks/angular.png" alt="Angular" title="Angular" style="width:auto; height:80px;" />
    <img src="/images/frameworks/emberjs.png" alt="Ember" title="Ember" style="width:auto; height:80px;" />
</div>

Kickstand UI is built with native web components which makes it framework agnostic! You can implement it in any of your projects regardless of the framework you are using.

<ks-button display="hollow" href="/getting-started/framework-integrations/overview.html">Add To Your Project</ks-button>
