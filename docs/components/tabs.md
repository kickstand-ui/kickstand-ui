# Tabs

Tabs are a useful way to group related information in a discoverable way.

<div class="my=xl">
    <ks-tabs>
        <ks-tab-list>
            <ks-tab>Three Hole Punch Jim</ks-tab>
            <ks-tab>Dave</ks-tab>
            <ks-tab>Facebook</ks-tab>
            <ks-tab>Popeye</ks-tab>
        </ks-tab-list>
        <ks-tab-panel>
            <img src="/images/demo/three_hole_punch_jim.jpg" alt="three-hole-punch jim" />
        </ks-tab-panel>
        <ks-tab-panel>
            <img src="/images/demo/jim_as_dave.jpg" alt="jim dressed as dave" />
        </ks-tab-panel>
        <ks-tab-panel>
            <img src="/images/demo/jim_as_facebook.jpg" alt="jim dressed as facebook" />
        </ks-tab-panel>
        <ks-tab-panel>
            <img src="/images/demo/jim_as_popeye.jpeg" alt="jim dressed as popeye" />
        </ks-tab-panel>
    </ks-tabs>
</div>

```html
<ks-tabs>
    <ks-tab-list>
        <ks-tab>Three Hole Punch Jim</ks-tab>
        <ks-tab>Dave</ks-tab>
        <ks-tab>Facebook</ks-tab>
        <ks-tab>Popeye</ks-tab>
    </ks-tab-list>

    <ks-tab-panel>
        <img src="/images/demo/three_hole_punch_jim.jpg" alt="three-hole-punch jim" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="/images/demo/jim_as_dave.jpg" alt="jim dressed as dave" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="/images/demo/jim_as_facebook.jpg" alt="jim dressed as facebook" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="/images/demo/jim_as_popeye.jpeg" alt="jim dressed as popeye" />
    </ks-tab-panel>
</ks-tabs>
```

## Positioning

You can configure the position of the tabs using the `position` property. The available options are `top`, `bottom`, `left`, or `right`.

<div class="my=xl">
    <ks-tabs position="left">
        <ks-tab-list>
            <ks-tab>Dwight</ks-tab>
            <ks-tab>Creed</ks-tab>
            <ks-tab>Kevin</ks-tab>
        </ks-tab-list>
        <ks-tab-panel>
            <img src="/images/demo/dwight_joker.jpg" alt="Dwight dressed as The Joker" />
        </ks-tab-panel>
        <ks-tab-panel>
            <img src="/images/demo/creed_joker.jpg" alt="Creed dressed as The Joker" />
        </ks-tab-panel>
        <ks-tab-panel>
            <img src="/images/demo/kevin_joker.jpeg" alt="Kevin dressed as The Joker" />
        </ks-tab-panel>
    </ks-tabs>
</div>

```html
<ks-tabs position="left">
    <ks-tab-list>
        <ks-tab>Three Hole Punch Jim</ks-tab>
        <ks-tab>Dave</ks-tab>
        <ks-tab>Facebook</ks-tab>
        <ks-tab>Popeye</ks-tab>
    </ks-tab-list>

    <ks-tab-panel>
        <img src="/images/demo/dwight_joker.jpg" alt="Dwight dressed as The Joker" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="/images/demo/creed_joker.jpg" alt="Creed dressed as The Joker" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="/images/demo/kevin_joker.jpeg" alt="Kevin dressed as The Joker" />
    </ks-tab-panel>
</ks-tabs>
```

## Properties

### `<ks-tabs>`

| Property   | Attribute  | Description | Type     | Default |
| ---------- | ---------- | ----------- | -------- | ------- |
| `position` | `position` | the position of the tabs around the tab content            | `top`, `bottom`, `left`, or `right` | `'top'` |
