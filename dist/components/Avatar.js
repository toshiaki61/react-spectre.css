import * as tslib_1 from "tslib";
import classnames from 'classnames';
import React from 'react';
var AvatarIcon = function (_a) {
    var className = _a.className, alt = _a.alt, props = tslib_1.__rest(_a, ["className", "alt"]);
    var classes = classnames('avatar-icon', className);
    return React.createElement("img", tslib_1.__assign({ className: classes, alt: alt }, props));
};
AvatarIcon.defaultProps = {
    alt: '',
    className: '',
};
var Presence = function (_a) {
    var presence = _a.presence;
    return (React.createElement("i", { className: classnames('avatar-presence', presence) }));
};
var Avatar = function (_a) {
    var className = _a.className, xl = _a.xl, lg = _a.lg, sm = _a.sm, xs = _a.xs, initial = _a.initial, src = _a.src, icon = _a.icon, alt = _a.alt, presence = _a.presence, props = tslib_1.__rest(_a, ["className", "xl", "lg", "sm", "xs", "initial", "src", "icon", "alt", "presence"]);
    var classes = classnames('avatar', {
        'avatar-xl': xl,
        'avatar-lg': lg,
        'avatar-sm': sm,
        'avatar-xs': xs,
    }, className);
    return (React.createElement("figure", tslib_1.__assign({ className: classes, "data-initial": initial }, props),
        src ? React.createElement("img", { src: src, alt: alt }) : null,
        icon ? (React.createElement(Avatar, { className: "avatar-icon", initial: initial, src: icon.src, alt: icon.alt })) : null,
        presence ? React.createElement(Presence, { presence: presence }) : null));
};
Avatar.defaultProps = {
    className: '',
    xl: false,
    lg: false,
    sm: false,
    xs: false,
    initial: '',
    img: '',
    icon: undefined,
    alt: '',
    presence: '',
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map