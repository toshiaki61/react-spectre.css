// @flow
import React from 'react';
import classnames from 'classnames';
import noop from 'noop';

import Button from '../elements/Button';

export type ItemProps = {
  id: string,
  name: string,
  onClick: (e: Event, id: string) => void,
  active?: boolean,
  items: Array<ItemProps>,
};
const Item = ({ id, name, items, active, onClick }: ItemProps) => (
  <li className={classnames('nav-item', { active })}>
    <Button
      href="#"
      onClick={e => onClick(e, id)}
    >{name}</Button>
    {items && items.length ? <Nav items={items} onClick={onClick} /> : null}
  </li>
);
Item.defaultProps = {
  items: [],
  active: false,
  onClick: noop,
};

export type NavProps = {
  items: Array<ItemProps>,
  active?: string,
  onClick?: (e: Event, id: string) => void,
};
const Nav = ({ items, active, onClick }: NavProps) => (
  <ul className="nav">
    {items.map(item => (
      <Item key={item.id} {...item} active={active === item.id} onClick={onClick} />
    ))}
  </ul>
);
Nav.defaultProps = {
  items: [],
  active: '',
  onClick: noop,
};

export default Nav;
