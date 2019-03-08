import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import cx from 'classnames';
import { Button } from 'elements/Button';
import { attr } from 'utilities/attr';
import { hasModalChildren } from './util';
import ModalBody from './ModalBody';
import ModalContainer from './ModalContainer';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';
function renderModal(p) {
    if (hasModalChildren(p)) {
        return p.children;
    }
    var title = p.title, content = p.content, footer = p.footer, onClearClick = p.onClearClick;
    return (React.createElement(Fragment, null,
        React.createElement(ModalOverlay, { onClearClick: onClearClick }),
        React.createElement(ModalContainer, null,
            React.createElement(ModalHeader, null,
                React.createElement(Button, tslib_1.__assign({ clearButton: true, onClick: onClearClick }, attr({ floating: 'right' }))),
                title ? React.createElement(ModalTitle, { className: "h5" }, title) : null),
            content ? React.createElement(ModalBody, null, content) : null,
            footer ? React.createElement(ModalFooter, null, footer) : null)));
}
var Modal = function (p) {
    var _a;
    var active = p.active, size = p.size, className = p.className;
    return (React.createElement("div", { className: cx('modal', className, (_a = {
                active: active
            },
            _a["modal-" + size] = size,
            _a)) }, renderModal(p)));
};
export default Modal;
//# sourceMappingURL=Modal.js.map