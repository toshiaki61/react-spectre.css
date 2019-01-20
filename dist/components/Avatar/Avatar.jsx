import React from 'react';
import cx from 'classnames';
import AvatarIcon from './AvatarIcon';
import AvatarPresence from './AvatarPresence';
var Avatar = function (_a) {
    var className = _a.className, initial = _a.initial, src = _a.src, alt = _a.alt, size = _a.size, icon = _a.icon, presence = _a.presence;
    var _b;
    return (<figure className={cx('avatar', (_b = {},
        _b["avatar-" + size] = size,
        _b), className)} data-initial={initial}>
      {src ? <img src={src} alt={alt}/> : null}
      {icon ? (<AvatarIcon {...icon}/>) : presence ? (<AvatarPresence presence={presence}/>) : null}
    </figure>);
};
Avatar.defaultProps = {
    className: '',
    initial: '',
    icon: undefined,
    alt: '',
};
export default Avatar;
//# sourceMappingURL=Avatar.jsx.map