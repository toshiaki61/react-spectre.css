/* @flow */
import React from 'react';
import classnames from 'classnames';
import noop from 'noop';

import Divider from '../utilities/Divider';

export type BadgeProps = {
  content?: string | number | React.DOM
};
const Badge = ({ content }: BadgeProps) => {
  if (!content) {
    return null;
  }
  return (
    <div className="menu-badge">
      <span className="label label-primary">{content}</span>
    </div>
  );
};

export type ItemProps = {
  link?: string,
  content?: string,
  className?: string,
  divider?: boolean | string,
  active?: boolean,
  badge?: number,
  onClick?: (e: Event) => void,
};
const Item = ({
  link,
  content,
  className,
  divider,
  active,
  badge,
  onClick,
  ...props
}: ItemProps) => {
  const classes = classnames('menu-item', className);
  if (divider) {
    return <Divider className={className} content={typeof divider === 'string' ? divider : ''} />;
  }
  return (
    <li className={classes} {...props}>
      <Badge content={badge} />
      <a href={link} className={classnames({ active })} onClick={onClick}>{content}</a>
    </li>
  );
};
Item.defaultProps = {
  link: '',
  content: '',
  className: '',
  divider: false,
  active: false,
  badge: 0,
  onClick: noop,
};

export type MenuProps = {
  className?: string,
  nav?: boolean,
  contents: Array<ItemProps>
}
const Menu = ({ className, nav, contents, ...props }: MenuProps) => {
  const classes = classnames('menu', {
    'menu-nav': nav,
  }, className);
  const ulProps = Object
    .keys(props)
    .filter(p => p !== 'header')
    .reduce((memo, p) => Object.assign(memo, { [p]: props[p] }), {});
  return (
    <ul className={classes} {...ulProps}>
      {contents.map((content, i) => {
        const key = `menu-item_${i}`;
        return (
          <Item key={key} {...content} />
        );
      })}
    </ul>
  );
};
Menu.defaultProps = {
  className: '',
  nav: false,
  contents: [],
};

export default Menu;
