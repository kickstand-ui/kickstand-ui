#!/usr/bin/env node

const fs = require("fs-extra");
const glob = require("glob-promise");
const path = require("path");
const svgson = require("svgson");

glob("src/scripts/components/icon/icons/*.svg")
    .then((filePaths) =>
        Promise.all(
            filePaths.map((fileName) => {
                const file = fs.readFileSync(fileName, "utf-8");
                const content = svgson.parseSync(file);
                return new Promise((resolve) =>
                    resolve({ file: fileName, content })
                );
            })
        )
    )
    .then((files) => {
        const iconList = files.map((svg) => {
            let file = path.basename(svg.file).replace(".svg", "");
            let iconGroup = svg.content.children.find(
                (child) => child.name === "g" || child.name === "path"
            );
            updateSvgAttributes(iconGroup);
            return {
                name: file,
                icon: svgson.stringify(iconGroup),
            };
        });

        let filename = `src/scripts/components/icon/icon-list.ts`;
        fs.writeFileSync(filename, buildIconFileContents(iconList), "utf8");

        console.info("Icon Loading Complete");
        process.exit(0);
    });

function updateSvgAttributes(element) {
    if(!element)
        return;

    delete element.attributes.id;
    delete element.attributes["clip-path"];
    delete element.attributes["data-name"];

    if (element.attributes.fill)
        element.attributes.fill =
            element.attributes.fill === "none" ? "none" : "currentColor";

    if (element.attributes.stroke)
        element.attributes.stroke =
            element.attributes.stroke === "none" ? "none" : "currentColor";

    element.children.forEach((x) => updateSvgAttributes(x));
}

function buildIconFileContents(iconList) {
    return `export const iconList = ${JSON.stringify(iconList, null, 4)};`;
}
