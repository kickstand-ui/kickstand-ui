# Side Drawer

<div class="my-xl">
    <ks-button shows="basic_drawer">Open Drawer</ks-button>
    <ks-side-drawer header-text="Basic Drawer" id="basic_drawer">
        <p>“I’m not a millionaire. I thought I would be by the time I was 30, but I wasn’t even close. Then I thought maybe by 40, but by 40 I had less money than I did when I was 30.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
</div>

```html
<ks-button shows="basic_drawer">Open Drawer</ks-button>
<ks-side-drawer header-text="Basic Drawer" id="basic_drawer">
    <p>“I’m not a millionaire. I thought I would be by the time I was 30, but I wasn’t even close. Then I thought maybe by 40, but by 40 I had less money than I did when I was 30.”</p> 
    <p>– Michael Scott</p>
</ks-side-drawer>
```

## Position

<div class="my-xl">
    <ks-button shows="left_drawer">Open Left Drawer</ks-button>
    <ks-button shows="right_drawer">Open Right Drawer</ks-button>
    <ks-side-drawer position="left" header-text="Left Drawer" id="left_drawer">
        <p>“I am running away from my responsibilities. And it feels good.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
    <ks-side-drawer position="right" header-text="Right Drawer" id="right_drawer">
        <p>“I’m not usually the butt of the joke. I’m usually the face of the joke.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
</div>

```html
    <ks-button shows="left_drawer">Open Left Drawer</ks-button>
    <ks-button shows="right_drawer">Open Right Drawer</ks-button>
    <ks-side-drawer position="left" header-text="Left Drawer" id="left_drawer">
        <p>“I am running away from my responsibilities. And it feels good.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
    <ks-side-drawer position="right" header-text="Right Drawer" id="right_drawer">
        <p>“I’m not usually the butt of the joke. I’m usually the face of the joke.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
```

## Sizes

<div class="my-xl">
    <ks-button class="mb-md" shows="sm_drawer">Open Small Drawer</ks-button><br>
    <ks-button class="mb-md" shows="md_drawer">Open Medium Drawer</ks-button><br>
    <ks-button class="mb-md" shows="lg_drawer">Open Large Drawer</ks-button><br>
    <ks-button class="mb-md" shows="xl_drawer">Open X-Large Drawer</ks-button>
    <ks-side-drawer size="sm" header-text="Small Drawer" id="sm_drawer">
        <p>“And I knew exactly what to do. But in a much more real sense, I had no idea what to do.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
    <ks-side-drawer size="md" header-text="Medium Drawer" id="md_drawer">
        <p>“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
    <ks-side-drawer size="lg" header-text="Large Drawer" id="lg_drawer">
        <p>“Abraham Lincoln once said that ‘If you’re a racist, I will attack you with the North,” and these are the principles I carry with me in the workplace.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
    <ks-side-drawer size="xl" header-text="X-Large Drawer" id="xl_drawer">
        <p>“As it turns out, you can’t just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um. I think I can do it.”</p> 
        <p>– Michael Scott</p>
    </ks-side-drawer>
</div>

```html
<ks-button shows="sm_drawer">Open Small Drawer</ks-button>
<ks-button shows="md_drawer">Open Medium Drawer</ks-button>
<ks-button shows="lg_drawer">Open Large Drawer</ks-button>
<ks-button shows="xl_drawer">Open X-Large Drawer</ks-button>

<ks-side-drawer size="sm" header-text="Small Drawer" id="sm_drawer">
    <p>“And I knew exactly what to do. But in a much more real sense, I had no idea what to do.”</p> 
    <p>– Michael Scott</p>
</ks-side-drawer>
<ks-side-drawer size="md" header-text="Medium Drawer" id="md_drawer">
    <p>“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.”</p> 
    <p>– Michael Scott</p>
</ks-side-drawer>
<ks-side-drawer size="lg" header-text="Large Drawer" id="lg_drawer">
    <p>“Abraham Lincoln once said that ‘If you’re a racist, I will attack you with the North,” and these are the principles I carry with me in the workplace.”</p> 
    <p>– Michael Scott</p>
</ks-side-drawer>
<ks-side-drawer size="xl" header-text="X-Large Drawer" id="xl_drawer">
    <p>“As it turns out, you can’t just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um. I think I can do it.”</p> 
    <p>– Michael Scott</p>
</ks-side-drawer>
```

## Showing and Hiding

If you are using the [`<ks-button>` element](/components/button.html) you can take advantage of the `shows` and `hides` properties to open and close any of the components built using the [overlay](/components/overlay.html) component.

<div class="my-xl">
    <ks-button shows="button_drawer">Show Drawer using Button</ks-button>
    <ks-side-drawer header-text="Basic Drawer" id="button_drawer">
        <ks-button class="" hides="button_drawer">Close</ks-button>
    </ks-side-drawer>
</div>

```html
<ks-button shows="button_drawer">Show Drawer using Button</ks-button>
<ks-side-drawer header-text="Basic Drawer" id="button_drawer">
    <ks-button hides="button_drawer">Close</ks-button>
</ks-side-drawer>
```

You can also programmatically show and hide side-drawers. It is as simple as using JavaScript to select the element and call the `show()` or `hide()` methods. Here is a simple example that will show the side-drawer when the button is clicked and hide it after 3 seconds.

<div class="my-xl">
    <ks-button id="test_button">Show Drawer</ks-button>
    <ks-side-drawer header-text="Basic Drawer" id="test_drawer">
        <p>I will close in 3 seconds...</p>
    </ks-side-drawer>
    <script>
        let testButton = document.getElementById('test_button');
        let testDrawer = document.getElementById('test_drawer');
        testButton.addEventListener('click', () => {
            testDrawer.show();
            setTimeout(function() {
                testDrawer.hide();
            }, 3000);
        });
    </script>
</div>

```html
<ks-button id="test_button">Show Drawer</ks-button>
<ks-side-drawer header-text="Basic Drawer" id="test_drawer">
    <p>I will close in 3 seconds...</p>
</ks-side-drawer>
<script>
    let testButton = document.getElementById('test_button');
    let testDrawer = document.getElementById('test_drawer');

    // add click event listener to button
    testButton.addEventListener('click', () => {
        // show loading overlay
        testDrawer.show();

        // hide after 3 seconds
        setTimeout(function() {
            testDrawer.hide();
        }, 3000);
    });
</script>
```


## Properties

| Property     | Attribute     | Description | Type                             | Default     |
| ------------ | ------------- | ----------- | -------------------------------- | ----------- |
| `headerText` | `header-text` | The text that will display at the top of the Side-Drawer            | `string` | `undefined` |
| `position`   | `position`    | Where on the viewport the drawer will come from            | `"left"` or `"right"`            | `'left'`    |
| `size`       | `size`        | How wide the Side-Drawer will be            | `"lg"`, `"md"`, `"sm"`, or`"xl"` | `'sm'`      |

## Events

| Event    | Description                    | Type               |
| -------- | ------------------------------ | ------------------ |
| `hidden` | emitted when drawer is hidden   | `CustomEvent<any>` |
| `shown`  | emitted when drawer is shown    | `CustomEvent<any>` |

```html
<ks-side-drawer id="my_drawer">
    ...
</ks-side-drawer>

<script>
    let myDrawer = document.getElementById('my_drawer');

    myDrawer.addEventListener('hidden', () => {
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
