---
{
    "description": "Kickstand UI's table utilities are designed to provide consistency with your table designs.",
    "meta": [
        {
            "property": "og:title",
            "content": "Table Utilities - Kickstand UI"
        },
        {
            "property": "og:image",
            "content": "https://kickstand-ui.com/images/screen_shots/table.png"
        },
        {
            "property": "og:description",
            "content": "Kickstand UI's table utilities are designed to provide consistency with your table designs."
        },
        {
            "property": "twitter:image:src",
            "content": "https://kickstand-ui.com/images/screen_shots/table.png"
        }
    ]
}
---

# Table

Kickstand UI's table utilities are designed to provide consistency with your table designs.

<div class="my-xl">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Character</th>
            <th scope="col">Played By</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Agent Michael Scarn</td>
            <td>Michael Scott</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Golenface</td>
            <td>Jim Halpert</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Sandra</td>
            <td>Pam Halpert</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>Samuel L. Chang</td>
            <td>Dwight Schrute</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>Jasmine Windsong</td>
            <td>Jan Levinson</td>
        </tr>
    </tbody>
</table>
```

:::tip Scope
If you are curious about the `scope` attribute, check out the [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#The_scope_attribute) on the value they bring to your tables
:::

## Striped

To improve the readability of your data, you can apply the `striped` class to your tables and every other row in the `<tbody>` will get a darker background to provide contrast between the rows.

<div class="my-xl">
    <table class="table striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table striped">
    ...
</table>
```

## Hover

You can provide an additional layer of focus to your rows by adding the `hover` class. This will set a darker background color for the row in the `<tbody>` that is being hovered over.

<div class="my-xl">
    <table class="table striped hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<table class="table striped hover">
    ...
</table>
```

## Responsive

Typically, large table on small displays run over the edge of the viewport and can cause undesired effects. Wrapping the table in a `<div>` with the class `table-responsive` will hide the overflow and allow the user to scroll the content without shifting the entire page.

<div class="my-xl table-responsive">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Character</th>
                <th scope="col">Played By</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Agent Michael Scarn</td>
                <td>Michael Scott</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Golenface</td>
                <td>Jim Halpert</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Sandra</td>
                <td>Pam Halpert</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Samuel L. Chang</td>
                <td>Dwight Schrute</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Jasmine Windsong</td>
                <td>Jan Levinson</td>
            </tr>
        </tbody>
    </table>
</div>

```html
<div class="my-xl table-responsive">
    <table class="table">
    ...
    </table>
</div>
```
