module.exports = {
    title: "Kickstand UI",
    description: "Kickstand UI is a Design System built using Web Components so you can use it Everywhere!",
    head: [
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
            }
        ],
        [
            "meta",
            {
                property: "og:image",
                content: "https://kickstand-ui.com/images/kickstand_card.png"
            }
        ],
        [
            "meta",
            {
                property: "og:title",
                content: "Kickstand UI"
            }
        ],
        [
            "meta",
            {
                property: "og:description",
                content: "Kickstand UI is a Design System built using Web Components so you can use it Everywhere!"
            }
        ],
        [
            "meta",
            {
                property: "twitter:image:src",
                content: "https://kickstand-ui.com/images/kickstand_card.png"
            }
        ],
        ["meta", { property: "twitter:card", content: "summary_large_image" }],
        ["meta", { property: "twitter:creator", content: "@stuffbreaker" }],
        ["meta", { property: "robots", content: "index, follow" }],
        ["meta", { property: "HandheldFriendly", content: "True" }],
        ["link", { rel: "icon", href: "/images/kickstand_icon.png" }]
    ],
    themeConfig: {
        logo: "/images/kickstand_logo_2.svg",
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
                    "./getting-started/how-to-use.html",
                    {
                        title: "Framework Integrations",
                        children: [
                            "/getting-started/framework-integrations/overview.html",
                            // "/getting-started/framework-integrations/javascript.html",
                            // "/getting-started/framework-integrations/typescript.html",
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
                    "/components/form.html",
                    "/components/form-field.html",
                    "/components/icons.html",
                    "/components/images.html",
                    "/components/loading.html",
                    "/components/menu-bar.html",
                    "/components/modal.html",
                    "/components/overlay.html",
                    "/components/progress-bar.html",
                    "/components/side-drawer.html",
                    "/components/switch.html",
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
                    "/utilities/shadows.html",
                    "/utilities/spacing.html",
                    "/utilities/table.html",
                    "/utilities/text.html"
                ]
            },
            {
                title: "Theming",
                collapsable: true,
                children: [
                    "/theming/design-tokens.html"
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
