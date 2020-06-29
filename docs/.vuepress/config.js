module.exports = {
    title: "Kickstand UI",
    description:
        "The Design System You Can Use Everywhere!",
    head: [
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }
        ],
        ["link", { rel: "icon", href: "/images/kickstand_icon.png" }]
    ],
    themeConfig: {
        logo: "/images/kickstand_logo.png",
        nav: [
            {
                text: "Contact",
                link: "/contact.html"
            },
            {
                text: "NPM",
                link: "https://www.npmjs.com/package/kickstand-ui"
            },
            {
                text: "GitHub",
                link: "https://github.com/break-stuff/kickstand-ui"
            }
        ],
        sidebar: [
            {
                title: "Getting Started",
                collapsable: true,
                children: [
                    "./getting-started/introduction.html",
                    "./getting-started/installation.html",
                    {
                        title: "Framework Integrations",
                        children: [
                            "/getting-started/framework-integrations/overview.html",
                            "/getting-started/framework-integrations/javascript.html",
                            "/getting-started/framework-integrations/typescript.html",
                            "/getting-started/framework-integrations/angular.html",
                            "/getting-started/framework-integrations/ember.html",
                            "/getting-started/framework-integrations/react.html",
                            "/getting-started/framework-integrations/vue.html"
                        ]
                    }
                ]
            },
            {
                title: "Components",
                collapsable: true,
                children: [
                    "/components/accordion.html",
                    "/components/alert.html",
                    "/components/badge.html",
                    "/components/breadcrumbs.html",
                    "/components/button.html",
                    "/components/card.html",
                    "/components/carousel.html",
                    "/components/dropdown.html",
                    "/components/form-field.html",
                    "/components/icons.html",
                    "/components/images.html",
                    "/components/loading.html",
                    "/components/menu-bar.html",
                    "/components/modal.html",
                    "/components/overlay.html",
                    "/components/progress-bar.html",
                    "/components/side-drawer.html",
                    // "/components/spin-box.html",
                    "/components/tabs.html",
                    "/components/tooltip.html"
                ]
            },
            // {
            //     title: "Content",
            //     collapsable: true,
            //     children: []
            // },
            {
                title: "Layout",
                collapsable: true,
                children: ["/layout/grid.html", "/layout/flex-box.html"]
            },
            {
                title: "Utilities",
                collapsable: true,
                children: [
                    "/utilities/borders.html",
                    "/utilities/colors.html",
                    "/utilities/display.html",
                    "/utilities/layout.html",
                    "/utilities/spacing.html",
                    "/utilities/table.html",
                    "/utilities/text.html"
                ]
            },
            {
                title: "Theming",
                collapsable: true,
                children: [
                    "/theming/design-tokens.html",
                    // "/theming/customizing-components.html"
                ]
            }
        ]
    },
    plugins: [
        [
            "@vuepress/google-analytics",
            {
                ga: "UA-106134260-3" // UA-00000000-0
            }
        ],
        [
            "sitemap",
            {
                hostname: "https://kickstand-ui.com/"
            }
        ]
    ]
};
