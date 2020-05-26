<div>
    <div class="display-flex align-center">
        <img class="w-33" src="/images/kickstand_logo.png" alt="kickstand logo" />
        <div class="ml-lg">
            <h1 class="text-xxl">Kickstand UI</h1>
            <h2 class="border-none">The Customizable Design System</h2>
            <div>
                <ks-button size="large">Get Started</ks-button>
                <ks-button display="hollow" size="large" class="ml-sm">Github</ks-button>
            </div>
        </div>
    </div>
    <ks-row class="mt-xl">
        <ks-column>
            <ks-card>
                <ks-card-body card-title="Portable">
                    Kickstand UI is built with native web components which makes it framework agnostic! You can implement it in any of your projects regardless of the framework you are using.
                </ks-card-body>
                <ks-card-footer>
                    <ks-button display="hollow" href="/getting-started/installation.html">Add To Your Project</ks-button>
                </ks-card-footer>
            </ks-card>
        </ks-column>
        <ks-column>
            <ks-card>
                <ks-card-body card-title="Customizable">
                    Most applications do not want to use a design system right out of the box. Kickstand UI is designed to be customizable to meet your brand guidelines.
                </ks-card-body>
                <ks-card-footer>
                    <ks-button display="hollow" href="/theming/design-tokens.html">Customize Your Project</ks-button>
                </ks-card-footer>
            </ks-card>
        </ks-column>
        <ks-column>
            <ks-card>
                <ks-card-body card-title="Performant">
                    Kickstand UI is very light-weight and allows for component lazy-loading in browsers that support ES6 modules.
                </ks-card-body>
                <ks-card-footer>
                    <ks-button display="hollow" href="/getting-started/installation.html">Learn More</ks-button>
                </ks-card-footer>
            </ks-card>
        </ks-column>
    </ks-row>
    <style>
        .theme-default-content:not(.custom) {
            width: 100% !important;
            max-width: 860px !important;
        }
    </style>
    <style>
        .card {
            box-shadow: none;
            height: 100%;
        }
    </style>
</div>
