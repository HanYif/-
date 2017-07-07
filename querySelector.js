
/** hanyf
 * 
 * 
 * @param {any} node 
 * @param {any} selector 
 */
function querySelector(node, selector) {
    while (node) {
        var currentNode = node;
        if (!match(node, selector[0])) {
            node = nextElement(currentNode);
            continue;
        }

        var next = null;
        for (let i = 0, selLength; i < selLength - 1; i++) {
            

        }

        node = nextElement(currentNode);
    }
}

function match(node, selector) {
    
}

function nextTarget(onde, selector) {

}