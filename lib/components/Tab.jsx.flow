/* @flow */
import React from 'react';
import classnames from 'classnames';
import noop from 'lodash.noop';

export type LinkProps = {
  onClick: (e: Event) => void,
  className?: string,
  'data-badge'?: number | string,
};
export type ItemProps = {
  id: string,
  name: string,
  badge: number | string,
};
export type TabProps = {
  items: Array<ItemProps>,
  active?: string,
  onClick: (e: Event, id: string) => void,
  action?: React.DOM,
};
const Tab = ({ items, active, onClick, action }: TabProps) => {
  if (!items.length) {
    return null;
  }
  return (
    <ul className="tab tab-block">
      {(items).map(({ id, name, badge }) => {
        const key = `tab-${id}`;
        const linkProp: LinkProps = {
          onClick: e => onClick(e, id),
        };
        if (badge) {
          linkProp.className = 'badge';
          linkProp['data-badge'] = badge;
        }
        return (
          <li key={key} className={classnames('tab-item', { active: id === active })}>
            <a href="#" {...linkProp}>{name}</a>
          </li>
        );
      })}
      {action ? <li className="tab-item tab-action">
        {action}
      </li> : null}
    </ul>
  );
};
Tab.defaultProps = {
  items: [],
  active: '',
  onClick: noop,
  action: null,
};

export default Tab;
