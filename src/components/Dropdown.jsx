/* @flow */
import React from 'react';
import classnames from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import Menu from './Menu';
import noop from 'noop';

import type { ItemProps as MenuItemProps } from './Menu';

export type DropdownProps = {
  className: string,
  active: boolean,
  right: boolean,
  initialValue: string,
  contents: Array<MenuItemProps>,
  onClick: (e: Event) => void,
};
const Dropdown = ({
  className,
  active,
  right,
  initialValue,
  contents,
  onClick,
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
      <Menu contents={contents} />
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
