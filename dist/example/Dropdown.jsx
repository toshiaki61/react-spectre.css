import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Dropdown } from '@components/Dropdown';
var DropdownExample = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownExample, _super);
    function DropdownExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 'initial value',
            active: false,
        };
        _this.onClick = function () { return _this.setState({ active: !_this.state.active }); };
        return _this;
    }
    DropdownExample.prototype.render = function () {
        var _this = this;
        var _a = this.state, active = _a.active, value = _a.value;
        // tslint:disable-next-line:no-console
        var handleMenuClick = function (e, id) { return console.log(id); };
        var handleBlur = function () { return _this.setState({ active: false }); };
        return (<Dropdown initialValue={value} onMenuClick={handleMenuClick} contents={[{ id: 'e-1', link: '#accordions', content: 'Element 1' }]} active={active} onClick={this.onClick} onBlur={handleBlur}/>);
    };
    return DropdownExample;
}(Component));
export default DropdownExample;
//# sourceMappingURL=Dropdown.jsx.map