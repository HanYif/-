
/**
 * (使用递归处理树)
 * 
 * @param {any} node 
 * @param {any} id 
 * @returns 
 */
function getElementById(node, id) { 
    if (!node) {
        return null;
    }

    if (node.id === id) {
        return node;
    }

    for (let i = 0, len = node.childNodes.length; i < len; i++) {
        var found = getElementById(node.childNodes[i]);
        if (found) {
            return found;
        }
    }
    return null;

}

// 不用Promise发多个请求
var ids = [12331, 4342123, 123];
(function setRequest() {
    var id = ids.shift();
    if (id) {
        $.ajax({
            url: './get',
            data: {id}
        }).always(function() {
            // do sth
            console.log('finish');
            sendRequest();
        });
    } else {
        console.log('finished');
    }
})();

// while版本
function getElementById(node, id) {
    while (node) {
        if (node.id === id) return node;
        node = nextElement(node);
    }
    return;
}

function nextElement(node) {
    if (node.childNodes) {
        return node.childNodes[0];
    }

    if (node.nextSibling) {
        return node.nextSibling;
    }

    while (node.parentNode) {
        if (node.parentNode.nextSibling) {
            return node.parentNode.nextSibling;
        }
        node = node.parentNode;
    }
    return null;
}
