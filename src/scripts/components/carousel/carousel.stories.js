import { text, select, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Carousel' };

export const carouselWithImages = () => {
    const timer = number('timer', 6000);
    const autoplay = boolean('autoplay', true);
    const thumbnails = boolean('thumbnails', false);
    const showIndicators = boolean('show-indicators', true);
    const showControls = boolean('show-controls', true);
    const cssClass = text('css-class', 'm-md w-33');

    return (`<c-carousel autoplay="${autoplay}" thumbnails="${thumbnails}" show-indicators="${showIndicators}" show-controls="${showControls}" timer="${timer}" css-class="${cssClass}">
        <c-carousel-slide alt="Jim Pranks Dwight" src="http://oyster.ignimgs.com/wordpress/stg.ign.com/2013/05/Stapler_in_jello.jpg"></c-carousel-slide>
        <c-carousel-slide alt="Jim Pranks Dwight" src="https://www.bing.com/th?id=OIP.vcsEsRm8QqPj0OW_edJICwHaEJ&pid=Api&rs=1"></c-carousel-slide>
        <c-carousel-slide alt="Jim Pranks Dwight" src="https://moviefellas.files.wordpress.com/2013/05/pilot.jpg"></c-carousel-slide>
        <c-carousel-slide alt="Jim Pranks Dwight" src="https://www.bing.com/th?id=OIP.TUEcbhF4a8u_LQmqW8wSMQHaEJ&pid=Api&rs=1"></c-carousel-slide>
        <c-carousel-slide alt="Jim Pranks Dwight" src="https://img.buzzfeed.com/buzzfeed-static/static/2016-05/4/10/enhanced/webdr06/original-16454-1462371390-5.png"></c-carousel-slide>
        <c-carousel-slide alt="Jim Pranks Dwight" src="https://img.buzzfeed.com/buzzfeed-static/static/2015-07/17/14/enhanced/webdr08/enhanced-4901-1437158753-3.jpg"></c-carousel-slide>
</c-carousel>`);
};
