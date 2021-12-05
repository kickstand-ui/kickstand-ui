import { text, boolean, number } from "@storybook/addon-knobs";

export default { title: 'Components/Images' };

export const lazyImage = () => {
    const src = text('src', 'test.com');
    const fallbackSrc = text('fallback-src', 'https://imgix.bustle.com/rehost/2016/9/13/ffa8cec2-85d9-40ad-b386-906b75bf5610.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70');
    const src2 = text('src2', 'https://i.pinimg.com/originals/84/dd/ee/84ddee6dff0e2af20754826aecbc5c11.jpg');
    const alt = text('alt', 'Days of no nonsense');
    const width = number('width', undefined);
    const height = number('height', undefined);
    const lazy = boolean('lazy', true);
    const aspectRatio = text('aspect-ratio', '5:3');
    const threshold = number('threshold', 300);
    return (`<div style="height:100vh;margin-bottom:500px;">
                <h1>Scroll Down</h1>
            </div>
            <div>
                <h3>(I was lazy loaded...)</h3>
                <ks-img alt="${alt}" fallback-src="${fallbackSrc}" class="w-50" lazy="${lazy}" src="${src}" width="${width}" height="${height}" aspect-ratio="${aspectRatio}" threshold="${threshold}" />
            </div>
            <div style="height:100vh;margin-bottom:500px;">
                <h2>Scroll Down Some More</h2>
            </div>
            <div>
                <h3>(So was I...)</h3>
                <ks-img alt="${alt}" class="w-50" lazy="${lazy}" src="${src2}" width="${width}" height="${height}" aspect-ratio="${aspectRatio}" threshold="${threshold}" />
            </div>`);
};
