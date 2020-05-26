# JavaScript

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

Properties (or Props) are custom attributes you can modify to create specific behavior on a component. Standard HTML attributes like `class` or `id` are still available for these custom elements, but there is built-in functionality that will allow you to change the default behavior.

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

Events are available for executing custom functionality when a given event happens. When an event occurs, data and a JavaScript event will be emitted.

```html
<ks-form-field label="First Name" id="first_name"></ks-form-field>
```

```js
let firstNameInput = document.getElementById('first_name');

firstNameInput.addEventListener('updated', event => { /* your logic */ });
```
