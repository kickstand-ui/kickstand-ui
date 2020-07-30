# Accordion

Accordions are used to group and toggle (expand/collapse) sections of content

<div class="my-lg">
    <ks-accordion>
        <ks-accordion-slide heading="Michael Scott" expanded>
            "Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me."
        </ks-accordion-slide>
        <ks-accordion-slide heading="Jim Halpert">
            "I am about to do something very bold in this job that I've never done before... try."
        </ks-accordion-slide>
        <ks-accordion-slide heading="Stanley Hudson">
            "I have been trying to get on jury duty every year since I was 18 years old. To get and go sit in an air-conditioned room, downtown, judging people, while my lunch was paid for. That is the life."
        </ks-accordion-slide>
        <ks-accordion-slide heading="Dwight Schrute">
            "I’m an early bird and I’m a night owl. So I’m wise and I have worms."
        </ks-accordion-slide>
    </ks-accordion>
</div>

```html
<ks-accordion>
    <ks-accordion-slide heading="Michael Scott" expanded>
        "Guess what, I have flaws. What are they? Oh I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me."
    </ks-accordion-slide>
    <ks-accordion-slide heading="Jim Halpert">
        "I am about to do something very bold in this job that I've never done before... try."
    </ks-accordion-slide>
    <ks-accordion-slide heading="Stanley Hudson">
        "I have been trying to get on jury duty every year since I was 18 years old. To get and go sit in an air-conditioned room, downtown, judging people, while my lunch was paid for. That is the life."
    </ks-accordion-slide>
    <ks-accordion-slide heading="Dwight Schrute">
        "I’m an early bird and I’m a night owl. So I’m wise and I have worms."
    </ks-accordion-slide>
</ks-accordion>
```

## Expanded

```html
<!-- setting it in markup -->
<ks-accordion>
    <ks-accordion-slide heading="Heading Text" expanded="true">
        ...
    </ks-accordion-slide>
</ks-accordion>

<!-- or using abbreviated syntax -->
<ks-accordion>
    <ks-accordion-slide heading="Heading Text" expanded>
        ...
    </ks-accordion-slide>
</ks-accordion>
```

## Toggle Slide

<br />
Rather than expanding and collapsing the slide by setting the `expanded` property, you can use the `toggleSlide()`method.

```html
<ks-accordion>
    <ks-accordion-slide heading="Heading Text" id="slide_1">
        ...
    </ks-accordion-slide>
</ks-accordion>

<script>
    let slide1 = document.querySelector('#slide_1');
    slide1.toggleSlide();
</script>
```

## Properties

| Property   | Attribute  | Type      | Default     | Description |
| ---------- | ---------- | --------- | ----------- | ----------- |
| `expanded` | `expanded` | `boolean` | `false`     | manually control a slide's visibility |
| `heading`  | `heading`  | `string`  | `undefined` | setting the slide heading's text |

## Methods

### `toggleSlide() => Promise<void>`

#### Returns

Type: `Promise<void>`
