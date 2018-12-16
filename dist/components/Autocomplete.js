import classnames from 'classnames';
import React from 'react';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import Avatar from './Avatar';
import Chip from './Chip';
import Tile from './Tile';
var delimiter = '______';
function mark(target, search) {
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
function filter(word, key) {
    var regex = new RegExp(word, 'ig');
    return function search(value) {
        if (word === '') {
            return true;
        }
        return regex.test(value[key]);
    };
}
var Autocomplete = function (_a) {
    var placeholder = _a.placeholder, active = _a.active, selected = _a.selected, suggests = _a.suggests, input = _a.input, loading = _a.loading, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onClearClick = _a.onClearClick, onSelected = _a.onSelected;
    var classes = classnames('form-autocomplete-input form-input', {
        'is-focused': active,
    });
    var inputNode = (React.createElement("input", { className: "form-input", type: "text", placeholder: placeholder, value: input, onChange: onChange }));
    return (React.createElement("div", { className: "form-autocomplete", onFocus: onFocus, onBlur: onBlur },
        React.createElement("div", { className: classes },
            selected.map(function (_a) {
                var id = _a.id, name = _a.name, img = _a.img, initial = _a.initial;
                var handleClearClick = function (e) { return onClearClick(e, id); };
                return (React.createElement(Chip, { key: id, avatar: { initial: initial, src: img, alt: name }, content: name, clear: active, onClearClick: handleClearClick }));
            }),
            loading ? (React.createElement("div", { className: "has-icon-left" },
                inputNode,
                React.createElement(Icon, { form: true, loading: true }))) : (inputNode)),
        React.createElement("ul", { className: "menu", style: { position: active ? 'static' : 'absolute' } }, suggests
            .filter(function (v) { return filter(input, 'name')(v); })
            .map(function (_a) {
            var id = _a.id, name = _a.name, img = _a.img, initial = _a.initial;
            var handleSelect = function (e) { return onSelected(e, id); };
            return (React.createElement("li", { key: id, className: "menu-item" },
                React.createElement(Button, { href: "#", onClick: handleSelect },
                    React.createElement(Tile, { compact: true, content: mark(name, input), icon: React.createElement(Avatar, { sm: true, initial: initial, src: img, alt: name }) }))));
        }))));
};
Autocomplete.defaultProps = {
    placeholder: 'typing here',
    active: false,
    loading: false,
};
export default Autocomplete;
//# sourceMappingURL=Autocomplete.js.map