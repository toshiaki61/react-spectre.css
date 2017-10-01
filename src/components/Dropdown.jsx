/* @flow */
import React from 'react';
import classnames from 'classnames';
import noop from 'noop';

import Menu from './Menu';
import Button from '../elements/Button';
import Icon from '../elements/Icon';

import type { ItemProps as MenuItemProps } from './Menu';

export type DropdownProps = {
  className?: string,
  active?: boolean,
  right?: boolean,
  initialValue?: string,
  contents?: Array<MenuItemProps>,
  onClick?: (e: Event) => void,
  onMenuClick: (e: Event, id: string) => void,
};
const Dropdown = ({
  className,
  active,
  right,
  initialValue,
  contents,
  onClick,
  onMenuClick,
  ...props
}: DropdownProps) => {
  const classes = classnames('dropdown', {
    'dropdown-right': right,
    active,
  }, className);
  return (
    <div className={classes} {...props}>
      <Button link className="dropdown-toggle" tabIndex="0" onClick={onClick}>
        {initialValue} <Icon caret />
      </Button>
      <Menu onClick={onMenuClick} contents={contents} />
    </div>
  );
};
Dropdown.defaultProps = {
  className: '',
  active: false,
  right: false,
  initialValue: '',
  contents: [],
  onClick: noop,
};

export default Dropdown;
