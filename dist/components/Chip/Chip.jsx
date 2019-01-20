import React, { Fragment } from 'react';
import cx from 'classnames';
import { Avatar } from '@components/Avatar';
import { Button } from '@elements/Button';
import { hasChipChildren } from './util';
import ChipWrapper from './ChipWrapper';
function renderChip(p) {
    if (hasChipChildren(p)) {
        return p.children;
    }
    var clear = p.clear, icon = p.icon, avatar = p.avatar, onClearClick = p.onClearClick;
    return (<Fragment>
      {icon}
      {avatar ? <Avatar size="sm" {...avatar}/> : null}
      {p.content}
      {clear ? <Button clearButton onClick={onClearClick}/> : null}
    </Fragment>);
}
var Chip = function (p) {
    var htmlFor = p.htmlFor, className = p.className;
    return (<ChipWrapper htmlFor={htmlFor || ''} className={cx('chip', className)}>
      {renderChip(p)}
    </ChipWrapper>);
};
export default Chip;
//# sourceMappingURL=Chip.jsx.map