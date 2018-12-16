import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import Icon from '../elements/Icon';
var Title = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    var classes = classnames('empty-title', 'h5', className);
    return (React.createElement("p", tslib_1.__assign({ className: classes }, props), children));
};
Title.defaultProps = {
    className: '',
};
var Subtitle = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    var classes = classnames('empty-subtitle', className);
    return (React.createElement("p", tslib_1.__assign({ className: classes }, props), children));
};
Subtitle.defaultProps = {
    children: null,
    className: '',
};
var Action = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "empty-action" }, children));
};
var Empty = function (_a) {
    var children = _a.children, className = _a.className, icon = _a.icon, title = _a.title, subtitle = _a.subtitle, action = _a.action, props = tslib_1.__rest(_a, ["children", "className", "icon", "title", "subtitle", "action"]);
    var classes = classnames('empty', className);
    return (React.createElement("div", tslib_1.__assign({ className: classes }, props),
        icon ? (React.createElement("div", { className: "empty-icon" },
            React.createElement(Icon, { className: "icon-" + icon + " icon-3x" }))) : null,
        title ? React.createElement(Title, null, title) : null,
        subtitle ? React.createElement(Subtitle, null, subtitle) : null,
        action ? { action: action } : null,
        children));
};
Empty.defaultProps = {
    children: null,
    className: '',
    icon: '',
    title: null,
    subtitle: null,
};
Empty.Title = Title;
Empty.Subtitle = Subtitle;
Empty.Action = Action;
export default Empty;
//# sourceMappingURL=Empty.js.map