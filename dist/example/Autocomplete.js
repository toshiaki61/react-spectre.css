import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Autocomplete } from '@experimentals/Autocomplete';
var AutocompleteExample = /** @class */ (function (_super) {
    tslib_1.__extends(AutocompleteExample, _super);
    function AutocompleteExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
            loading: false,
            suggests: [
                {
                    id: '1',
                    name: 'Bruce Banner',
                    img: '',
                    initial: '',
                },
                {
                    id: '2',
                    name: 'Thor Odinson',
                    img: '//picturepan2.github.io/spectre/img/avatar-1.png',
                    initial: '',
                },
                {
                    id: '3',
                    name: 'Steve Rogers',
                    img: '//picturepan2.github.io/spectre/img/avatar-4.png',
                    initial: '',
                },
                {
                    id: '4',
                    name: 'Tony Stark',
                    img: '',
                    initial: 'TS',
                },
                {
                    id: '5',
                    name: 'Natasha Romanoff',
                    img: '',
                    initial: '',
                },
            ],
            selected: [],
            input: '',
        };
        _this.onClearClick = function (e, id) {
            e.preventDefault();
            var _a = _this.state, suggests = _a.suggests, selected = _a.selected;
            suggests.push(selected.find(function (row) { return row.id === id; }));
            _this.setState({
                suggests: suggests,
                selected: selected.filter(function (row) { return row.id !== id; }),
            });
        };
        _this.onSelected = function (e, id) {
            e.preventDefault();
            var _a = _this.state, suggests = _a.suggests, selected = _a.selected;
            var found = suggests.find(function (row) { return row.id === id; });
            if (found) {
                selected.push(found);
            }
            _this.setState({
                suggests: suggests.filter(function (row) { return row.id !== id; }),
                selected: selected,
            });
        };
        _this.onChange = function (_a) {
            var value = _a.target.value;
            return _this.setState({ input: value });
        };
        _this.onFocus = function () { return _this.setState({ active: true }); };
        _this.onBlur = function () { return _this.setState({ active: false }); };
        return _this;
    }
    AutocompleteExample.prototype.render = function () {
        var props = tslib_1.__assign({}, this.state, { onClearClick: this.onClearClick, onSelected: this.onSelected, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur });
        return React.createElement(Autocomplete, tslib_1.__assign({}, props));
    };
    return AutocompleteExample;
}(Component));
export default AutocompleteExample;
//# sourceMappingURL=Autocomplete.js.map