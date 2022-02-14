import { text } from '@storybook/addon-knobs';

export default { title: 'Components/Responsive Embed' };

export const defaultHeading = () => {
    const aspectRatio = text('aspect-ratio', '16x9');
    return `
        <div class="m-xxl">
            <p>This is a test</p>
            <ks-responsive-embed aspect-ratio="${aspectRatio}">
                <iframe src="https://www.youtube.com/embed/M8KmqaJvgpE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ks-responsive-embed>
        </div>
    `;
};
