# Angular

## Adding the Styles

After installing Kickstand UI, adding the styles is fairly straight forward. In your `angular.json` config file add a reference to the styles _before_ your global styles (that way your custom styles will easily override the default styles):

```json
 "styles": [
   "../node_modules/kickstand-ui/dist/kickstand-ui/kickstand-ui.css"
    "styles.css",
  ]
```

### SASS

If you are using `SASS` and customizing the default implementation, make sure your project is configured properly for it. The Angular CLI provides some tooling to help with this.

#### Angular 6+

```bash
ng config schematics.@schematics/angular:component.styleext scss
```

#### Angular < 6

```bash
# install the node-sass compiler
npm install node-sass --save-dev

# use Angular CLI to configure the project
ng set defaults.styleExt scss
```

In your main SASS file, add a reference to Kickstand UI in order to take advantage of tooling that is provided. Make sure it is referenced _before_ your custom styles:

```css
@import 'kickstand-ui/src/scss/styles';
```

Alternately, you can add a reference to the SASS in the `angular.json` config file _before_ your global styles (again, so that the default styles can easily be overridden):

```json
 "styles": [
   "../node_modules/kickstand-ui/src/scss/styles.scss"
    "styles.scss",
  ]
```

## Adding Components

::: tip Note
This is an adaptation from the [Stencil documentation](https://stenciljs.com/docs/angular).
:::

Using Kickstand UI within an Angular CLI project is a two-step process. You will need to:

1. Include the `CUSTOM_ELEMENTS_SCHEMA` in the modules that use the components.
2. Call `defineCustomElements()` from `main.ts` (or some other appropriate place).

## Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors. This code should be added into the `AppModule` and in every other modules that use your custom elements.

Here is an example of adding it to `AppModule`:

```tsx
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.

## Calling defineCustomElements

A component collection built with Stencil includes a main function that is used to load the components in the collection. That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in `main.ts` as such:

```tsx
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from 'test-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();
```

## Edge and IE11 polyfills

You will now need to add the `applyPolyfills()` that surround the `defineCustomElements()` function for legacy browser support.

```tsx
import { applyPolyfills, defineCustomElements } from 'kickstand-ui/loader';
...
applyPolyfills().then(() => {
  defineCustomElements()
})

```

## Accessing components using ViewChild and ViewChildren

Once included, components could be referenced in your code using `ViewChild` and `ViewChildren` as in the following example:

```tsx
import {Component, ElementRef, ViewChild} from '@angular/core';

import 'ks-modal';

@Component({
    selector: 'app-home',
    template: `<ks-modal #test></ks-modal>`,
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    @ViewChild('test') myModalComponent: ElementRef<HTMLKsModalElement>;

    async onAction() {
        await this.myModalComponent.nativeElement.open();
    }
}

```

## Bindings

Angular has a pretty good story for integration with web components but there are a few issues with the developer experience. If you want to know what the story is without the bindings go here: [https://stenciljs.com/docs/angular](https://stenciljs.com/docs/angular).

With bindings the web components get wrapped in an Angular component and then immediately become available as Angular Components. Some of the advantages of doing this are that you get types for your components and you also get the ability to use `ngModel` on inputs. You can then consume the Kickstand UI component library as an actual Angular Library and make it feels as though you are interacting with Angular components.

### Install

```bash
npm install @stencil/angular-output-target --save-dev
```


### Stencil Config setup

To make use of the `angularOutputPlugin` first import it into your `stencil.config.ts` file. Then add it as an `OutputTarget`.

```tsx
import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'demo',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'kickstand-ui',
      directivesProxyFile: '../component-library-angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
    },
  ],
};
```

#### componentCorePackage

This is the package that gets published that contains just your web components. This package is then used by the Angular package as a dependency

#### proxiesFile

This is the output file that gets generated by the outputTarget. This file should be referencing a different package location. In the example case we are choosing a sibling directory’s src directory. We will then create an Angular package that exports all components defined in this file.

#### valueAccessorConfigs

In order for `ngModel` to work on input components we need to define certain pieces of information about the input components. Unfortunately the Stencil compiler cannot infer the intent of components because this is a very conceptual idea.

### Setup of Angular Component Library

There is an example component library package available on Github so that you can get started. This repo will likely live as a sibling to Kickstand UI component library. https://github.com/ionic-team/stencil-ds-angular-template

### Usage

```tsx
import { ComponentLibraryModule } from 'component-library-angular';

@NgModule({
  ...
  imports: [
    ComponentLibraryModule
  ],
  ...
})
export class AppModule { }
```
