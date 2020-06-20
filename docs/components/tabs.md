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
        <img src="https://badgerherald.com/media/2014/10/Halloween-Jim_Three-Hole-Punch-Jim.jpg" alt="jim" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="https://img.buzzfeed.com/buzzfeed-static/static/2018-01/10/12/asset/buzzfeed-prod-fastlane-03/sub-buzz-20247-1515605252-1.jpg" alt="jim" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="https://s-i.huffpost.com/gen/2137796/images/o-JOHN-KRASINSKI-FACEBOOK-facebook.jpg" alt="jim" />
    </ks-tab-panel>
    <ks-tab-panel>
        <img src="https://th.bing.com/th/id/OIP.phya83cWh3fCeJ1ExctZIQHaEK?pid=Api&rs=1" alt="jim" />
    </ks-tab-panel>
</ks-tabs>
```

## Properties

### `<ks-tabs>`

| Property   | Attribute  | Description | Type     | Default |
| ---------- | ---------- | ----------- | -------- | ------- |
| `position` | `position` | the position of the tabs around the tab content            | `top`, `bottom`, `left`, or `right` | `'top'` |
