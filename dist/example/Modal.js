import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import Modal from '../components/Modal';
import Button from '../elements/Button';
var ModalExample = /** @class */ (function (_super) {
    tslib_1.__extends(ModalExample, _super);
    function ModalExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: false,
        };
        _this.onClick = function () { return _this.setState({ active: !_this.state.active }); };
        return _this;
    }
    ModalExample.prototype.render = function () {
        var _this = this;
        var handleModal = function () { return _this.setState({ active: true }); };
        return (React.createElement("div", null,
            React.createElement(Button, { primary: true, onClick: handleModal }, "open modal"),
            React.createElement(Modal, { content: "aaa", footer: "footer", title: "title", active: this.state.active, onClearClick: this.onClick })));
    };
    return ModalExample;
}(Component));
export default ModalExample;
//# sourceMappingURL=Modal.js.map