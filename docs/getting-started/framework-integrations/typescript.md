# TypeScript

Using TypeScript will follow the same pattern as outlined in the [JavaScript Documentation](/getting-started/framework-integrations/javascript.html), however Kickstand UI provides type definition files for each of the components. If you are using TypeScript, this will provide validation and autocomplete for components.

The pattern for the element type is as follows:

`HTML` + Tag (in Pascal Case) + `Element`


```html
<ks-modal id="my_modal">
    <!-- modal content -->
</ks-modal>
```

```tsx
let modal = document.querySelector<HTMLKsModalElement>('#my_modal');
```
