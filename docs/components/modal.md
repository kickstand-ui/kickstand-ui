# Modal

Modals are designed to display content in a layer above your existing content. Modals can be used send alerts or messages to your users, you can embed interactive components such as forms or wizards in them, or can be used with any other kind of custom content.

<div class="my-xl">
    <ks-button shows="basic_modal">Show Modal</ks-button>
    <ks-modal modal-title="Basic Modal" id="basic_modal">
        “Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.”
        <i>- Michael Scott</i>
    </ks-modal>
</div>

```html
<ks-button shows="basic_modal">Show Modal</ks-button>
<ks-modal modal-title="Basic Modal" id="basic_modal">
    ...
</ks-modal>
```

## Size

<div class="my-xl">
    <ks-button shows="small_modal">Small Modal</ks-button>
    <ks-button shows="medium_modal">Medium Modal</ks-button>
    <ks-button shows="large_modal">Large Modal</ks-button>
    <ks-modal modal-title="Small Modal" id="small_modal" size="sm">
        “I say dance, they say 'How high?'”<br>
        <i>- Michael Scott</i>
    </ks-modal>
    <ks-modal modal-title="Medium Modal" id="medium_modal" size="md">
        “I don't come up with this stuff, I just forward it along. You wouldn't arrest the guy who was just passing drugs from one guy to another.”<br>
        <i>- Michael Scott</i>
    </ks-modal>
    <ks-modal modal-title="Large Modal" id="large_modal" size="lg">
        “I had a great summer. I got west nile virus, lost a ton of weight. Then I went back to the lake. And I stepped on a piece of glass in the parking lot, which hurt. That got infected. Even though I peed on it...”<br>
        <i>- Michael Scott</i>
    </ks-modal>
</div>

```html
<ks-button shows="small_modal">Small Modal</ks-button>
<ks-button shows="medium_modal">Medium Modal</ks-button>
<ks-button shows="large_modal">Large Modal</ks-button>

<ks-modal modal-title="Small Modal" id="small_modal" size="sm">
    ...
</ks-modal>
<ks-modal modal-title="Medium Modal" id="medium_modal" size="md">
    ...
</ks-modal>
<ks-modal modal-title="Large Modal" id="large_modal" size="lg">
    ...
</ks-modal>
```

## Modal Footer

The `<ks-modal-footer>` does not have any custom properties available, but it does provide a way to promote consistency for your modal design. By default, the contents will align to the right.

<div class="my-xl">
    <ks-button shows="modal_with_footer">Show Modal with Footer</ks-button>
    <ks-modal modal-title="Modal With Footer" id="modal_with_footer">
        “Webster's Dictionary defines wedding as: The fusing of two metals with a hot torch.”<br>
        <i>- Michael Scott</i>
        <ks-modal-footer>
            <ks-button hides="modal_with_footer">Close</ks-button>
        </ks-modal-footer>
    </ks-modal>
</div>

```html
<ks-button shows="modal_with_footer">Show Modal with Footer</ks-button>
<ks-modal modal-title="Modal With Footer" id="modal_with_footer">
    ...
    <ks-modal-footer>
        <ks-button hides="modal_with_footer">Close</ks-button>
    </ks-modal-footer>
</ks-modal>
```

:::tip Note
It is important to choose what the footer behavior will be and try to be as consistent as possible, especially as it pertains to multiple actions. If you are undecided, start with least important action on the left moving to the most important action on the right because of the alignment. If you decide something else works better for you, change it. Whatever you decide to do, _be consistent_ in all of your modals.
:::

<div class="my-xl">
    <ks-button shows="multi_action_modal">Show Modal with Multiple Actions</ks-button>
    <ks-modal modal-title="Modal with Multiple Actions" id="multi_action_modal" size="lg">
        “Fool me once, strike one. Fool me twice, strike three.”<br>
        <i>- Michael Scott</i>
        <ks-modal-footer>
            <ks-button display="clear" hides="multi_action_modal">Least Important</ks-button>
            <ks-button display="hollow" hides="multi_action_modal">Semi-Important</ks-button>
            <ks-button class="ml-sm" hides="multi_action_modal">Very Important</ks-button>
        </ks-modal-footer>
    </ks-modal>
</div>

```html
<ks-button shows="multi_action_modal">Show Modal with Multiple Actions</ks-button>
<ks-modal modal-title="Modal with Multiple Actions" id="multi_action_modal" size="lg">
    ...
    <ks-modal-footer>
        <ks-button display="clear" hides="multi_action_modal">Least Important</ks-button>
        <ks-button display="hollow" hides="multi_action_modal">Semi-Important</ks-button>
        <ks-button hides="multi_action_modal">Very Important</ks-button>
    </ks-modal-footer>
</ks-modal>
```

## Prevent Close

By default, Kickstand UI's modal can be dismissed using the close button, the escape key, or clicking the overlay. You have the ability to require users to take a specific action before your modal will close using the `prevent-close` property. When it is set to `true`, the close button will be removed and clicking the overlay or pressing the escape key will not dismiss the modal.

<div class="my-xl">
    <ks-button shows="prevent-close_modal">Show Modal</ks-button>
    <ks-modal prevent-close modal-title="Prevent Close Modal" id="prevent-close_modal">
        <div style="width:100%;height:0;padding-bottom:58%;position:relative;">
            <iframe src="https://giphy.com/embed/Qa5dsjQjlCqOY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <p>
            <a href="https://giphy.com/gifs/the-office-michael-scott-graduation-Qa5dsjQjlCqOY">via GIPHY</a>
        </p>
        <ks-modal-footer>
            <ks-button hides="prevent-close_modal">Got It!</ks-button>
        </ks-modal-footer>
    </ks-modal>
</div>

```html
<ks-button shows="basic_modal">Show Modal</ks-button>
<ks-modal modal-title="Basic Modal" id="basic_modal">
    ...
</ks-modal>
```

## Showing and Hiding

If you are using the [`<ks-button>` element](/components/button.html) you can take advantage of the `shows` and `hides` properties to open and close any of the components built using the [overlay](/components/overlay.html) component.

<div class="my-xl display-flex">
    <ks-button shows="button_modal">Show Modal using Button</ks-button>
    <ks-modal modal-title="Basic Modal" id="button_modal">
        “Presents are the best way to show someone how much you care. It's like this tangible thing that you can point to and say, ‘Hey, man, I love you this many dollars worth.’”<br>
        <i>- Michael Scott</i>
        <ks-modal-footer>
            <ks-button hides="button_modal">Close</ks-button>
        </ks-modal-footer>
    </ks-modal>
</div>

```html
    <ks-button shows="button_modal">Show Modal using Button</ks-button>
    <ks-modal modal-title="Basic Modal" id="button_modal">
        ...
        <ks-modal-footer>
            <ks-button hides="button_modal">Close</ks-button>
        </ks-modal-footer>
    </ks-modal>
```

You can also programmatically show and hide overlays. It is as simple as using JavaScript to select the element and call the `show()` or `hide()` methods. Here is a simple example that will show the overlay when the button is clicked and hide it after 3 seconds.

<div class="my-xl">
    <ks-button id="js_button">Show Modal Programmatically</ks-button>
    <ks-modal modal-title="Basic Modal" id="test_modal">
        “I took her to the hospital. And the doctors tried to save her life, they did the best they could. And she is going to be okay.”<br>
        <i>- Michael Scott</i>
        <div class="mt-sm">(I will close in 3 seconds)</div>
    </ks-modal>
    <script>
        (function () {
            let testButton = document.getElementById('js_button');
            let testModal = document.getElementById('test_modal');
            testButton.addEventListener('click', () => {
                testModal.show();
                setTimeout(function() {
                    testModal.hide();
                }, 3000);
            });
        })();
    </script>
</div>

```html
<ks-button id="test_button">Show Overlay</ks-button>
<ks-modal modal-title="Basic Modal" id="test_modal">
    ...
</ks-modal>
<script>
    let testButton = document.getElementById('test_button');
    let testModal = document.getElementById('test_modal');

    // add click event listener to button
    testButton.addEventListener('click', () => {
        // show loading overlay
        testModal.show();

        // hide after 3 seconds
        setTimeout(function() {
            testModal.hide();
        }, 3000);
    });
</script>
```

## Accessibility

The modal component is built using the [`<ks-overlay>`](/components/overlay.html) component and inherits accessibility features from that such as:

- The modal has the `role="dialog"` to help assistive technology identify the modal's content as being grouped and separated from the rest of the page content.
- When opened, the focus will be set on the first clickable element within the modal.
- The element that triggered the modal will have the attribute `aria-expanded="true"` automatically added.
- When the user tabs, the focus will stay isolated within the modal to prevent elements outside the modal from being selected.
- When the modal is closed, the focus will go back to the element the user was on before the modal was opened so they do not lose their place in the document.
- Once the modal is closed, the element that triggered the modal will have the attribute `aria-expanded="true"` automatically added.
- The modal title will be used to label the overlay using the `aria-labelledby` attribute.
- The modal can be closed using the `esc` key for keyboard users.
- If you are using the `shows` and `hides` controls on the `<ks-button>` component, the button will automatically be populated with the appropriate `aria-haspopup`, `aria-expanded`, and `aria-controls` attributes on the button.

## Properties

| Property       | Attribute       | Description                                                    | Type                     | Default     |
| -------------- | --------------- | -------------------------------------------------------------- | ------------------------ | ----------- |
| `modalTitle`   | `modal-title`   | text to display with loading icon                              | `string`                 | `undefined` |
| `preventClose` | `prevent-close` | allows you to require acknowledgement before closing the modal | `boolean`                | `false`     |
| `size`         | `size`          | the size of the modal                                          | `"sm"`, `"md"` or `"lg"` | `"md"`      |

## Events

| Event    | Description                  | Type               |
| -------- | ---------------------------- | ------------------ |
| `hidden` | emitted when modal is hidden | `CustomEvent<any>` |
| `shown`  | emitted when modal is shown  | `CustomEvent<any>` |

```html
<ks-modal id="my_modal">
    ...
</ks-modal>

<script>
    let myModal = document.getElementById('my_modal');

    myModal.addEventListener('hidden', () => {
        // do something...
    });
</script>
```

## Methods

### `hide() => Promise<void>`

#### Returns

Type: `Promise<void>`

### `show() => Promise<void>`

#### Returns

Type: `Promise<void>`
