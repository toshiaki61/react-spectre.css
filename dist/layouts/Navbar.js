import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
import { acquireContainerProps } from './Columns';
import Container from './Container';
var Section = function (_a) {
    var children = _a.children, className = _a.className, center = _a.center, props = tslib_1.__rest(_a, ["children", "className", "center"]);
    var classes = classnames({
        'navbar-section': !center,
        'navbar-center': center,
    }, className);
    return (React.createElement("section", tslib_1.__assign({ className: classes }, props), children));
};
Section.defaultProps = {
    children: null,
    className: '',
    center: false,
};
var NavbarWithoutContainer = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    var classes = classnames('navbar', className);
    return (React.createElement("header", tslib_1.__assign({ className: classes }, props), children));
};
NavbarWithoutContainer.defaultProps = {
    className: '',
};
var Navbar = function (_a) {
    var children = _a.children, container = _a.container, props = tslib_1.__rest(_a, ["children", "container"]);
    var content = (React.createElement(NavbarWithoutContainer, tslib_1.__assign({}, props), children));
    if (!container) {
        return content;
    }
    var containerProps = acquireContainerProps(container);
    return React.createElement(Container, tslib_1.__assign({}, containerProps), content);
};
Navbar.defaultProps = {
    container: false,
};
var Brand = function (_a) {
    var children = _a.children, className = _a.className, props = tslib_1.__rest(_a, ["children", "className"]);
    var classes = classnames('navbar-brand', className);
    var component = null;
    if (props.href) {
        component = (React.createElement("a", tslib_1.__assign({ className: classes }, props), children));
    }
    else {
        component = (React.createElement("span", tslib_1.__assign({ className: classes }, props), children));
    }
    return component;
};
Brand.defaultProps = {
    className: '',
    href: '',
};
Navbar.Brand = Brand;
Navbar.Section = Section;
export default Navbar;
//# sourceMappingURL=Navbar.js.map