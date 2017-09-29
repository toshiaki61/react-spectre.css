/* @flow */
import React from 'react';
import classnames from 'classnames';

import Button from '../Button';

export type ItemProps = {
  small: boolean,
  tooltip: string,
  content: React.DOM | string,
};
const Item = ({ small, tooltip, content, ...props }: ItemProps) => {
  const classes = classnames('bar-item', { tooltip });
  return (
    <div
      className={classes}
      data-tooltip={tooltip}
      {...props}
    >{small ? null : content}</div>
  );
};
Item.defaultProps = {
  small: false,
  tooltip: '',
  content: '',
};

export type ProgressBarItemProps = ItemProps & {
  value: string,
  role: string,
  style: { width: string },
  content: React.DOM,
};
export type BarProps = {
  className: string,
  small: boolean,
  slider: boolean,
  items: Array<ProgressBarItemProps>,
};
const Bar = ({ className, small, slider, items }: BarProps) => {
  const classes = classnames('bar', {
    'bar-sm': small,
    'bar-slider': slider,
  }, className);
  return (
    <div className={classes}>
      {items.map((item, i) => {
        const key = `bar-item-${i}`;
        if (slider) {
          const value = `${item.value}%`;
          Object.assign(item, {
            role: 'progressbar',
            style: { width: value },
            content: <Button className="bar-slider-btn tooltip" data-tooltip={value} />,
          });
        }
        return (
          <Item key={key} small={small} {...item} />
        );
      })}
    </div>
  );
};
Bar.defaultProps = {
  className: '',
  small: false,
  slider: false,
  items: [],
};

export default Bar;
