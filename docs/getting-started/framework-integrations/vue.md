# Vue

## Adding Styles

### Configuring Your Project

If your app was created using Vue CLI, adding SASS support is as easy as installing `sass-loader`:

```bash
npm install -D sass-loader sass
```

### Import Styles

If you don't already have a main `app.scss` or `styles.scss` file, it is highly recommend that you create one and import it into the `src/main.js` file (create a separate folder in `src` and add the global style there - `src/scss/styles.scss`):

```js
import 'scss/styles.scss';
```

Then import the Kickstand UI files to the global styles file:

```css
@import 'kickstand-ui/src/scss/styles';
```

## Adding Components

::: tip Note
This is an adaptation from the [Stencil documentation](https://stenciljs.com/docs/vue).
:::

In order to use Kickstand UI within your Vue app, the application must be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file.

Assuming you’ve run `npm install --save kickstand-ui` beforehand, you import the components into the `main.js` file by

1. importing the node module
2. telling Vue to ignore the custom element tags (see `https://vuejs.org/v2/api/#ignoredElements`)
3. binding the Stenciljs component code to the window object

```tsx
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all Kickstand UI components 
// (all components prefixed with "ks-")
Vue.config.ignoredElements = [/ks-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```

Kickstand UI components should now be available in any of your Vue components.
