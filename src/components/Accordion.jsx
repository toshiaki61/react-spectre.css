/* @flow */
import React from 'react';
import classnames from 'classnames';

import Icon from '../Icon';
import Menu from './Menu';
import uniqueId from '../form/uniqueId';
import position from '../utilities/position';

import type { ItemProps as MenuItemProps } from './Menu';

export type ItemProps = {
  contents: Array<MenuItemProps>,
  className?: string,
  exclusive?: boolean,
  useIcon?: boolean,
  header: React.DOM | string,
};
const Item = ({ contents, className, exclusive, useIcon, header }: ItemProps) => {
  const classes = classnames('accordion-item', className);
  const id = uniqueId('accordion-item');
  const type = exclusive ? 'radio' : 'checkbox';
  const inputProps = { id, type, name: `accordion-${type}` };
  const icon = useIcon ? <Icon className={position({ marginRight: true })} arrowRight /> : null;
  return (
    <div className={classes}>
      <input {...inputProps} hidden />
      <label className="accordion-header" htmlFor={id}>
        {icon}
        {header}
      </label>
      <div className="accordion-body">
        <Menu nav contents={contents} />
      </div>
    </div>
  );
};
Item.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false,
};

export type AccordionProps = {
  menus: React.DOM,
  className: string,
  exclusive: boolean,
  useIcon: boolean,
}
const Accordion = ({ menus, className, exclusive, useIcon }: AccordionProps) => {
  const classes = classnames('accordion', className);
  return (
    <div className={classes}>
      {menus.map(({ header, contents, ...menu }: ItemProps, i: number) => {
        const key = `accordion_${i}`;
        return (
          <Item
            key={key}
            exclusive={exclusive}
            useIcon={useIcon}
            header={header}
            contents={contents}
            {...menu}
          />
        );
      })}
    </div>
  );
};
Accordion.defaultProps = {
  className: '',
  exclusive: false,
  useIcon: false,
};

export default Accordion;
