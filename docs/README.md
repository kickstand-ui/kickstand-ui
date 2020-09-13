<div class="display-flex align-center">
    <img class="w-25" src="/images/kickstand_logo.png" alt="kickstand logo" />
    <div class="ml-lg">
        <h1 class="text-xxl">Kickstand UI</h1>
        <h2 class="border-none text-md text-bold">The Design System You Can Use <em><u>Everywhere</u></em>!</h2>
    </div>
</div>

## Getting Started

Installing Kickstand UI is as easy as adding a few tags to your page.

```html
<link rel="stylesheet" href="https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.css" />
<script src="https://unpkg.com/kickstand-ui/dist/kickstand-ui.js"></script>
```

Check out our [documentation](/getting-started/installation.html) for more in-depth instructions on adding it to your project.

## _Extremely_ Performant

Kickstand UI is built using web components, so no additional JavaScript frameworks are necessary to run it. In addition to that, components are lazy-loaded in modern browsers, so the initial payload is only `8kb` of JavaScript and `8kb` of CSS!

As you use components throughout your application, the HTML, JavaScript, and CSS will only be loaded when it is needed, so you only load what you need.

## User Experience (UX) and Accessibility

The Kickstand UI framework is designed to make your application as usable as possible regardless of the user's circumstances. Great effort has gone into ensuring that content has sufficient color contrast, proper HTML semantics, appropriate `roles` and `aria` attributes, as well as ensuring the overall design and aesthetics make the components easy to use and interact with.

In the documentation for each of the components, there is an _Accessibility_ section with all of the relevant information about any features that have been added to make the component more accessible and any information you should know to ensure your application is accessible.

If you feel that an improvement can be made to provide a better user experience or better accessibility, please [reach out](./contact.md).

## Developer Experience (DX)

One of the priorities of Kickstand UI is to make creating applications as effortless as possible to developers and content creators while keeping it flexible enough to meet your needs. You should be able to prototype and develop feature-rich applications with very little custom code. However, if you need to customize the framework, you can add custom design tokens and CSS to get the look and feel you are looking for.

<ks-button display="hollow" href="/theming/design-tokens.html">Customize Your Project</ks-button>

## Browser Support

<div class="display-flex space-around my-lg">
    <img src="/images/browsers/chrome.png" alt="Chrome" title="Chrome" style="width:64px; height:64px;" />
    <img src="/images/browsers/chromium.png" alt="Chromium" title="Chromium" style="width:64px; height:64px;" />
    <img src="/images/browsers/firefox.png" alt="Firefox" title="Firefox" style="width:64px; height:64px;" />
    <img src="/images/browsers/safari.png" alt="Safari" title="Safari" style="width:64px; height:64px;" />
    <img src="/images/browsers/opera.png" alt="Opera" title="Opera" style="width:64px; height:64px;" />
    <img src="/images/browsers/edge.jpeg" alt="Edge" title="Edge" style="width:auto; height:64px;" />
    <img src="/images/browsers/internet_explorer.png" alt="Internet Explorer 11" title="Internet Explorer 11" style="width:64px; height:64px;" />
</div>

All of Kickstand UI's components are built using standards-based [web components](https://www.webcomponents.org/introduction). Browser support has greatly improved over the years. For features that are not fully supported, polyfills have been added (which will be included as-needed) to provide a great experience no matter what browser you are using.

Supported browsers include **Chrome**, **Chromium-based browsers** (this includes _Brave_, the new _Microsoft Edge_, and _Vivaldi_), **Firefox**, **Safari**, **Opera**, **Microsoft Edge** (legacy), and **Internet Explorer 11**.

## Framework Support

<div class="display-flex space-around my-lg">
    <a href="/getting-started/installation.html"><img src="/images/frameworks/HTML5.JPG" alt="HTML5" title="HTML5" style="width:auto; height:80px;" /></a>
    <a href="/getting-started/framework-integrations/vue.html"><img src="/images/frameworks/vuejs.png" alt="Vuejs" title="Vuejs" style="width:auto; height:80px;" /></a>
    <a href="/getting-started/framework-integrations/react.html"><img src="/images/frameworks/react.png" alt="React" title="React" style="width:auto; height:80px;" /></a>
    <a href="/getting-started/framework-integrations/angular.html"><img src="/images/frameworks/angular.png" alt="Angular" title="Angular" style="width:auto; height:80px;" /></a>
    <a href="/getting-started/framework-integrations/ember.html"><img src="/images/frameworks/emberjs.png" alt="Ember" title="Ember" style="width:auto; height:80px;" /></a>
</div>

Kickstand UI is built with native web components which makes it framework agnostic! You can implement it in any of your projects regardless of the framework you are using.

<ks-button display="hollow" href="/getting-started/installation.html">Add To Your Project</ks-button>
