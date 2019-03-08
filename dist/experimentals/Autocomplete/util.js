import React from 'react';
export var delimiter = '______';
export function mark(target, search) {
    if (!search) {
        return target;
    }
    var regex = new RegExp("(" + search + ")", 'ig');
    return target
        .replace(regex, delimiter + "$1" + delimiter)
        .replace(new RegExp("^" + delimiter + "|" + delimiter + "$", 'g'), '')
        .split(delimiter)
        .filter(function (row) { return row !== ''; })
        .map(function (row, i) {
        if (regex.test(row)) {
            var key = "mark-" + i;
            return React.createElement("mark", { key: key }, row);
        }
        return row;
    });
}
export function filter(word, key) {
    var regex = new RegExp(word, 'ig');
    return function search(value) {
        if (word === '') {
            return true;
        }
        return regex.test(value[key]);
    };
}
//# sourceMappingURL=util.js.map