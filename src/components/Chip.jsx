/* @flow */
import * as React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

import Avatar from './Avatar';
import Button from '../elements/Button';

import type { AvatarProps } from './Avatar';

type ChipProps = {
  className?: string,
  clear?: boolean,
  icon?: React.DOM,
  avatar?: AvatarProps,
  content?: string,
  onClearClick?: (e: Event) => void,
};
const Chip = ({
  clear,
  icon,
  avatar,
  content,
  className,
  onClearClick,
  ...props
}: ChipProps): React.Element<*> => {
  const classes = classnames('chip', className);
  return (
    <span className={classes} {...props}>
      {icon}
      {avatar ? <Avatar sm initial={avatar.initial} img={avatar.img} alt={avatar.alt} /> : null}
      {content}
      {clear ? <Button clear onClick={onClearClick} /> : null}
    </span>
  );
};
Chip.defaultProps = {
  className: '',
  clear: false,
  icon: null,
  avatar: null,
  content: '',
  onClearClick: noop,
};

export default Chip;
