# Using the Components

Just like a standard HTML element, there are two ways of interacting with Kickstand UI's components.

The first is directly in the markup:

```html
<ks-modal size="sm">
    <!-- modal content -->
</ks-modal>
```

The second is programmatically through JavaScript:

```js
let modal = document.querySelector('ks-modal');

modal.size = 'sm';
```

There are three main types of interaction available for each component - _Properties_, _Methods_, and _Events_. In the documentation for the components you will find information for each of these interactions that are available for the component.

## Properties

Properties (or Props) are custom attributes you can modify to create specific behavior on a component. Standard HTML attributes like `class` or `id` are still available for these custom elements, but there customizable attributes that will allow you to change the default behavior.

The example above shows how you can change the size of the modal using the `size` prop.

## Methods

Methods are used to expose functionality for the component. An example would be how you can open or close the modal using the API provided when the element is selected.

```js
let modal = document.querySelector('ks-modal');

modal.open();
// or
modal.close();
```

## Events

Events are available for executing your own logic when an event happens. When an event occurs, data and a JavaScript event will be emitted.

```html
<ks-form-field label="First Name" id="first_name"></ks-form-field>
```

```js
let firstNameInput = document.getElementById('first_name');

firstNameInput.addEventListener('updated', event => {
    /* your logic */
});
```

An custom data provided by the component will be located in the `detail` property on the event (`event.detail`).

## TypeScript

Using TypeScript will follow the same pattern as outlined in above, however Kickstand UI provides type definition files for each of the components. If you are using TypeScript, this will provide validation and autocomplete for components.

The pattern for the element type is as follows:

`HTML` + _Tag (in Pascal Case)_ + `Element`

```html
<ks-modal id="my_modal">
    <!-- modal content -->
</ks-modal>
```

```tsx
let modal = document.querySelector<HTMLKsModalElement>('#my_modal');
```

or

```tsx
let modal = document.querySelector('#my_modal') as HTMLKsModalElement;
```
