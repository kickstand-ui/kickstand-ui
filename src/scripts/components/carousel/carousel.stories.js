import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Carousel' };

export const defaultCarousel = () => {
    const autoplay = boolean('autoplay', true);
    return (`<c-carousel autoplay="${autoplay}">
    <div class="slide">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 text-xl" width="800" height="400"
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
            aria-label="Placeholder: Second slide">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dominant-baseline="middle" text-anchor="middle"
                dy=".3em">First slide</text>
        </svg>
    </div>
    <div class="slide">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 text-xl" width="800" height="400"
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
            aria-label="Placeholder: Second slide">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dominant-baseline="middle" text-anchor="middle"
                dy=".3em">Second slide</text>
        </svg>
    </div>
    <div class="slide">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 text-xl" width="800" height="400"
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
            aria-label="Placeholder: Second slide">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dominant-baseline="middle" text-anchor="middle"
                dy=".3em">Third slide</text>
        </svg>
    </div>
    <div class="slide">
        <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100 text-xl" width="800" height="400"
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
            aria-label="Placeholder: Second slide">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dominant-baseline="middle" text-anchor="middle"
                dy=".3em">Fourth slide</text>
        </svg>
    </div>
</c-carousel>
`);
};
