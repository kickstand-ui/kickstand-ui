import { select } from '@storybook/addon-knobs';

export default { title: 'Components/ScrollToTop' };

const colors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark',
];
const displays = ['solid', 'hollow', 'clear', 'link'];
const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

export const scrollToTop = () => {
    const color = select('color', colors, 'primary');
    const display = select('display', displays, 'solid');
    const size = select('size', sizes, 'md');
    return `<div style="height:1200px;">
        <a href="#">Test</a>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet venenatis dui. Donec interdum nunc sed lobortis gravida. Aliquam tortor mauris, interdum sit amet cursus vel, luctus eu velit. Phasellus vel venenatis urna, id pulvinar purus. Suspendisse potenti. Donec pharetra nunc ac ex bibendum pulvinar nec non enim. Aliquam ac tortor eros. Aliquam orci enim, aliquam non imperdiet dignissim, ultrices nec lacus. Praesent placerat, nibh sit amet interdum aliquet, erat enim varius sem, non sollicitudin libero neque et tortor. Proin tincidunt ac arcu non viverra. Proin interdum sed nisl eu aliquam.
        </p>
        <ks-scroll-to-top color="${color}" display="${display}" size="${size}">
            <ks-icon class="text-lg" icon="chevron_up" label="scroll to top" />
        </ks-scroll-to-top>
    </div>`;
};
