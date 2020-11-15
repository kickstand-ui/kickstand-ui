import { text, select } from "@storybook/addon-knobs";

export default { title: 'Components/Gallery' };

export const playground = () => {
    const heading = text('heading', 'Test Gallery');
    const gutter = select('gutter', ['none', 'xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'], 'md');
    const width = text('item-width', '300px');
    return (`<div class="m-xxl">
        <ks-gallery heading="${heading}" gutter="${gutter}" item-width="${width}">
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 1"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 2"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 3"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 4"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 5"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 6"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 7"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 8"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 9"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
            <ks-card img-src="https://media.boingboing.net/wp-content/uploads/2018/07/screenshot-22.jpg"
                alt="Michael Scott"
                >
                <ks-card-body card-title="Meditation Moment 10"
                        card-subtitle="Comfort Food">
                        "It's never too early for ice cream, Jim. But we didn't have any ice cream, so this is mayonnaise and black olives. It's comfort food, alright?"
                </ks-card-body>
                <ks-card-footer>
                    <ks-button>Get One</ks-button>
                </ks-card-footer>
            </ks-card>
        </ks-gallery>
    </div>`);
};