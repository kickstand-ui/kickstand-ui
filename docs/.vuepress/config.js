module.exports = {
    title: "Kickstand UI",
    description:
        "The customizable design systems and component library built with native web components",
    head: [
        ["link", { rel: "icon", href: "/images/kickstand_icon.png" }],
        ["link", { rel: "stylesheet", href: "https://unpkg.com/kickstand-ui/dist/kickstand-ui/kickstand-ui.css" }],
        ["script", { src: "https://unpkg.com/kickstand-ui/dist/kickstand-ui.js" }],
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
                    "/components/modal.html",
                    "/components/navbar.html",
                    "/components/overlay.html",
                    "/components/progress-bar.html",
                    "/components/side-drawer.html",
                    "/components/spin-box.html",
                    "/components/tabs.html",
                    "/components/tooltip.html"
                ]
            },
            {
                title: "Content",
                collapsable: true,
                children: []
            },
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
                    "/theming/customizing-components.html"
                ]
            }
        ]
    }
};
