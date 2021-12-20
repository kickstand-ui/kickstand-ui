import { text, select, boolean } from "@storybook/addon-knobs";

export default { title: 'Components/Navbar' };

const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'];
export const navbarBarProperties = () => {
    const logoUrl = text('logo-url', '');
    const altText = text('alt-text', '');
    const tagline = text('tagline', 'Navbar Props');
    const collapse = select('collapse', ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'], 'sm')
    const fixed = select('fixed', ['', 'top', 'bottom'], '');
    const color = select('color', colors, 'primary')
    const inverted = boolean('inverted', false);
    const linkTag = text('link-tag', 'a');
    const hrefProp = text('href-prop', 'href');

    return (`
    <div>
        <ks-navbar
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
            <ks-navbar-row>
                <ks-navbar-group>
                    <ks-navbar-item>
                        <a href="#">Test</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <a href="#">Test 1</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
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
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <a href="#">Test 1</a>
                    </ks-navbar-item>
                </ks-navbar-group>
            </ks-navbar-row>
        </ks-navbar>
        <p>This is somebody text.</p>
    </div>
    `);
};

export const navbarGroupProperties = () => {
    const position = select('position', ['left', 'right'], 'right');
    return (`
    <ks-navbar tagline="Group Props">
        <ks-navbar-row>
            <ks-navbar-group position="${position}">
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
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
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};

export const navbarWithMultipleRows = () => {
    return (`
    <ks-navbar tagline="Multiple Rows">
        <ks-navbar-row>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Sign Up</a>
                </ks-navbar-item>
                <ks-navbar-item class="pl-none">
                    <ks-button size="sm" color="secondary">Sign In</ks-button>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
        <ks-navbar-row>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
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
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};

export const navbarWithMultipleGroups = () => {
    return (`
    <ks-navbar tagline="Multiple Groups">
        <ks-navbar-row>
            <ks-navbar-group position="left">
                <ks-navbar-item>
                    <a href="#">Test</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <a href="#">Test 1</a>
                </ks-navbar-item>
                <ks-navbar-item>
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
                </ks-navbar-item>
            </ks-navbar-group>
            <ks-navbar-group>
                <ks-navbar-item>
                    <a href="#">Sign Up</a>
                </ks-navbar-item>
                <ks-navbar-item>
                    <ks-button color="secondary" size="sm">Sign In</ks-button>
                </ks-navbar-item>
            </ks-navbar-group>
        </ks-navbar-row>
    </ks-navbar>
    `);
};

export const multiplenavbars = () => {
    return (`
        <div class="my-xl">
            <ks-navbar tagline="Collapse at XL" collapse="xl">
                <ks-navbar-row>
                    <ks-navbar-item>
                        <a href="#">Home</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-navbar-item>
                </ks-navbar-row>
            </ks-navbar>
            <br>
            <ks-navbar tagline="Collapse at LG" collapse="lg">
                <ks-navbar-row>
                    <ks-navbar-item>
                        <a href="#">Home</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-navbar-item>
                </ks-navbar-row>
            </ks-navbar>
            <br>
            <ks-navbar tagline="Collapse at MD" collapse="md">
                <ks-navbar-row>
                    <ks-navbar-item>
                        <a href="#">Home</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-navbar-item>
                </ks-navbar-row>
            </ks-navbar>
            <br>
            <ks-navbar tagline="Collapse at SM" collapse="sm">
                <ks-navbar-row>
                    <ks-navbar-item>
                        <a href="#">Home</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-navbar-item>
                </ks-navbar-row>
            </ks-navbar>
            <br>
            <ks-navbar tagline="Collapse at XS" collapse="xs">
                <ks-navbar-row>
                    <ks-navbar-item>
                        <a href="#">Home</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-navbar-item>
                </ks-navbar-row>
            </ks-navbar>
            <br>
            <ks-navbar tagline="Collapse at XXS" collapse="xxs">
                <ks-navbar-row>
                    <ks-navbar-item>
                        <a href="#">Home</a>
                    </ks-navbar-item>
                    <ks-navbar-item>
                        <ks-button color="secondary" size="sm" href="#">Shop Now</ks-button>
                    </ks-navbar-item>
                </ks-navbar-row>
            </ks-navbar>
        </div>    
    `);
}