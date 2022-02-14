import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Components/Menu Bar' };

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
export const menuBarProperties = () => {
    const logoUrl = text('logo-url', '');
    const altText = text('alt-text', '');
    const tagline = text('tagline', 'Menu Bar Props');
    const collapse = select(
        'collapse',
        ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
        'sm'
    );
    const fixed = select('fixed', ['', 'top', 'bottom'], '');
    const color = select('color', colors, 'primary');
    const inverted = boolean('inverted', false);
    const linkTag = text('link-tag', 'a');
    const hrefProp = text('href-prop', 'href');

    return `
    <div>
        <ks-menu-bar
            logo-url="${logoUrl}" 
            alt-text="${altText}" 
            tagline="${tagline}"
            collapse="${collapse}"
            color="${color}"
            inverted="${inverted}"
            inverted="${inverted}"
            fixed="${fixed}"
            link-tag="${linkTag}"
            href-prop="${hrefProp}"
            >
            <ks-menu-row>
                <ks-menu-group>
                    <ks-menu-item>
                        <a href="#">Test</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <a href="#">Test 1</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-dropdown
                            text="Drop-Down" 
                            position="right" 
                            display="link" 
                            >
                            <ks-dropdown-item><span>Non-clickable drop-down item</span></ks-dropdown-item>
                            <ks-dropdown-item><a href="#">Test 2</a></ks-dropdown-item>
                            <ks-dropdown-item><a href="#">Test 3</a></ks-dropdown-item>
                            <ks-dropdown-item><a href="#">Test 4</a></ks-dropdown-item>
                            <ks-dropdown-item><a href="#">Test 5</a></ks-dropdown-item>
                        </ks-dropdown>
                    </ks-menu-item>
                    <ks-menu-item>
                        <a href="#">Test 1</a>
                    </ks-menu-item>
                </ks-menu-group>
            </ks-menu-row>
        </ks-menu-bar>
        <p>This is somebody text.</p>
    </div>
    `;
};

export const menuGroupProperties = () => {
    const position = select('position', ['left', 'right'], 'right');
    return `
    <ks-menu-bar tagline="Group Props">
        <ks-menu-row>
            <ks-menu-group position="${position}">
                <ks-menu-item>
                    <a href="#">Test</a>
                </ks-menu-item>
                <ks-menu-item>
                    <a href="#">Test 1</a>
                </ks-menu-item>
                <ks-menu-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <ks-dropdown-item><a href="#">First Option - Test 1</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 2</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 3</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 4</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 5</a></ks-dropdown-item>
                    </ks-dropdown>
                </ks-menu-item>
            </ks-menu-group>
        </ks-menu-row>
    </ks-menu-bar>
    `;
};

export const menuWithMultipleRows = () => {
    return `
    <ks-menu-bar tagline="Multiple Rows">
        <ks-menu-row>
            <ks-menu-group>
                <ks-menu-item>
                    <a href="#">Sign Up</a>
                </ks-menu-item>
                <ks-menu-item class="pl-none">
                    <ks-button size="sm" color="secondary">Sign In</ks-button>
                </ks-menu-item>
            </ks-menu-group>
        </ks-menu-row>
        <ks-menu-row>
            <ks-menu-group>
                <ks-menu-item>
                    <a href="#">Test</a>
                </ks-menu-item>
                <ks-menu-item>
                    <a href="#">Test 1</a>
                </ks-menu-item>
                <ks-menu-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="right" 
                        display="link" 
                        >
                        <ks-dropdown-item><a href="#">First Option - Test 1</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 2</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 3</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 4</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 5</a></ks-dropdown-item>
                    </ks-dropdown>
                </ks-menu-item>
            </ks-menu-group>
        </ks-menu-row>
    </ks-menu-bar>
    `;
};

export const menuWithMultipleGroups = () => {
    return `
    <ks-menu-bar tagline="Multiple Groups">
        <ks-menu-row>
            <ks-menu-group position="left">
                <ks-menu-item>
                    <a href="#">Test</a>
                </ks-menu-item>
                <ks-menu-item>
                    <a href="#">Test 1</a>
                </ks-menu-item>
                <ks-menu-item>
                    <ks-dropdown
                        text="Drop-Down" 
                        position="left" 
                        display="link" 
                        >
                        <ks-dropdown-item><a href="#">First Option - Test 1</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 2</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 3</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 4</a></ks-dropdown-item>
                        <ks-dropdown-item><a href="#">Test 5</a></ks-dropdown-item>
                    </ks-dropdown>
                </ks-menu-item>
            </ks-menu-group>
            <ks-menu-group>
                <ks-menu-item>
                    <a href="#">Sign Up</a>
                </ks-menu-item>
                <ks-menu-item>
                    <ks-button color="secondary" size="sm">Sign In</ks-button>
                </ks-menu-item>
            </ks-menu-group>
        </ks-menu-row>
    </ks-menu-bar>
    `;
};

export const multipleMenus = () => {
    return `
        <div class="my-xl">
            <ks-menu-bar tagline="Collapse at XL" collapse="xl">
                <ks-menu-row>
                    <ks-menu-item>
                        <a href="#">Home</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-menu-item>
                </ks-menu-row>
            </ks-menu-bar>
            <br>
            <ks-menu-bar tagline="Collapse at LG" collapse="lg">
                <ks-menu-row>
                    <ks-menu-item>
                        <a href="#">Home</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-menu-item>
                </ks-menu-row>
            </ks-menu-bar>
            <br>
            <ks-menu-bar tagline="Collapse at MD" collapse="md">
                <ks-menu-row>
                    <ks-menu-item>
                        <a href="#">Home</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-menu-item>
                </ks-menu-row>
            </ks-menu-bar>
            <br>
            <ks-menu-bar tagline="Collapse at SM" collapse="sm">
                <ks-menu-row>
                    <ks-menu-item>
                        <a href="#">Home</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-menu-item>
                </ks-menu-row>
            </ks-menu-bar>
            <br>
            <ks-menu-bar tagline="Collapse at XS" collapse="xs">
                <ks-menu-row>
                    <ks-menu-item>
                        <a href="#">Home</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-menu-item>
                </ks-menu-row>
            </ks-menu-bar>
            <br>
            <ks-menu-bar tagline="Collapse at XXS" collapse="xxs">
                <ks-menu-row>
                    <ks-menu-item>
                        <a href="#">Home</a>
                    </ks-menu-item>
                    <ks-menu-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-menu-item>
                </ks-menu-row>
            </ks-menu-bar>
        </div>    
    `;
};
