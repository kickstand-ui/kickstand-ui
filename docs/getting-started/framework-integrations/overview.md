# Overview

Integrating Kickstand UI into your framework is not _required_ in order to take advantage of the component library.   However, doing so enables the web components to behave like part of the framework.

## Build Process

Kickstand UI's styles are built using [SASS](https://sass-lang.com/) and will need to be compiled in order to take advantage of the customization and tooling it provides.

In addition to compiling the SASS, you will need to incorporate post-processing into your build pipeline. The SASS is built without vendor prefixes and should be added using a tool like [PostCSS's](https://postcss.org/) [Autoprefixer](https://github.com/postcss/autoprefixer) to provide cross-browser consistency.

If there are any integration issues with any of the frameworks listed or if you are interested in how integrate with another framework, please feel free to [reach out](/contact.html), but also take a looks at Stencil's great [documentation](https://stenciljs.com/docs/overview).
