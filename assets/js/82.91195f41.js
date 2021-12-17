(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{473:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"adding-kickstand-ui-to-a-react-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-kickstand-ui-to-a-react-project"}},[s._v("#")]),s._v(" Adding Kickstand UI to a React Project")]),s._v(" "),a("h2",{attrs:{id:"add-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-components"}},[s._v("#")]),s._v(" Add Components")]),s._v(" "),a("p",[s._v("Import the "),a("code",[s._v("applyPolyfills()")]),s._v(" and "),a("code",[s._v("defineCustomElements()")]),s._v(" functions from the Kickstand UI loader in your "),a("code",[s._v("index.js")]),s._v(" file and execute them (as shown below) and you can start using Kickstand UI's components just like normal HTML elements.")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" applyPolyfills"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" defineCustomElements "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kickstand-ui/loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("applyPolyfills")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("defineCustomElements")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),a("p",[s._v("React has a reputation for not playing nice with "),a("a",{attrs:{href:"https://custom-elements-everywhere.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("web components"),a("OutboundLink")],1),s._v(". Being aware of these challenges, Kickstand UI has taken action to make sure the components are fully compatible with React. If there is an issue, please "),a("RouterLink",{attrs:{to:"/contact.html"}},[s._v("reach out")]),s._v(".")],1)]),s._v(" "),a("h2",{attrs:{id:"adding-styles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-styles"}},[s._v("#")]),s._v(" Adding Styles")]),s._v(" "),a("h3",{attrs:{id:"using-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-css"}},[s._v("#")]),s._v(" Using CSS")]),s._v(" "),a("p",[s._v("If you are using CSS, all you need to do is import the styles in Kickstand UI library into your "),a("code",[s._v("index.js")]),s._v(" file.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kickstand-ui/dist/kickstand-ui/kickstand-ui.css'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"using-sass"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-sass"}},[s._v("#")]),s._v(" Using SASS")]),s._v(" "),a("p",[s._v("If your app isn't already configured with SASS, you will first need to install "),a("code",[s._v("node-sass")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -D node-sass\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" node-sass\n")])])]),a("p",[s._v("Rename "),a("code",[s._v("src/App.css")]),s._v(" to "),a("code",[s._v("src/App.scss")]),s._v(" and update "),a("code",[s._v("src/App.js")]),s._v(" to import "),a("code",[s._v("src/App.scss")]),s._v(".")]),s._v(" "),a("p",[s._v("Now import Kickstand UI's styles into the "),a("code",[s._v("src/App.scss")]),s._v(" file.")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[s._v("@import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~kickstand-ui/src/scss/styles'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);