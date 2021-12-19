/*!
 * Sanitize an HTML string
 * @param  {String}          input   The HTML string to sanitize
 * @param  {Boolean}         returnNodes If true, returns HTML nodes instead of a string
 * @return {String|NodeList}       The sanitized string or nodes
 */
export function sanitizeHTML(input: string, returnNodes: boolean = false) {

    /**
     * Convert the string to an HTML document
     * @return {HTMLElement} An HTML document
     */
    function stringToHTML(): HTMLElement {
        let parser = new DOMParser();
        let doc = parser.parseFromString(input, 'text/html');
        return doc.body || document.createElement('body');
    }

    /**
     * Remove <script> elements
     * @param  {HTMLElement} html The HTML
     */
    function removeScripts(html: HTMLElement) {
        let scripts = html.querySelectorAll('script');
        for (let script of scripts as any) {
            script.remove();
        }
    }

    /**
     * Check if the attribute is potentially dangerous
     * @param  {String}  name  The attribute name
     * @param  {String}  value The attribute value
     * @return {Boolean}       If true, the attribute is potentially dangerous
     */
    function isPossiblyDangerous(name: string, value: string): boolean {
        let val = value.replace(/\s+/g, '').toLowerCase();
        return name.startsWith('on')
            || (['src', 'href', 'xlink:href'].includes(name)
                && (val.includes('javascript:')
                    || val.includes('data:')));
    }

    /**
     * Remove potentially dangerous attributes from an element
     * @param  {HTMLElement} elem The element
     */
    function removeAttributes(elem: HTMLElement) {
        let attributes = elem.attributes;        
        for (let { name, value } of attributes as any) {
            if (isPossiblyDangerous(name, value))
                elem.removeAttribute(name);            
        }

        elem.getAttributeNames().forEach((x: string) => {
            if(x.startsWith('on'))
                elem.removeAttribute(x);
        })
    }

    /**
     * Remove dangerous stuff from the HTML document's nodes
     * @param  {HTMLElement} html The HTML document
     */
    function clean(html: HTMLElement) {
        let nodes = html.children;
        for (let node of nodes as any) {
            removeAttributes(node);
            clean(node);
        }
    }

    // Convert the string to HTML
    let html = stringToHTML();

    // Sanitize it
    removeScripts(html);
    clean(html);

    // If the user wants HTML nodes back, return them
    // Otherwise, pass a sanitized string back
    return returnNodes ? html.childNodes : html.innerHTML;
}