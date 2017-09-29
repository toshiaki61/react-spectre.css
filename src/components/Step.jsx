/* @flow */
import React from 'react';
import classnames from 'classnames';

export type ItemProps = {
  id: string,
  name: string,
  tooltip: string,
};
export type StepProps = {
  items: Array<ItemProps>,
  active: string,
};
const Step = ({ items, active }: StepProps) => {
  if (!items.length) {
    return null;
  }
  return (
    <ul className="step">
      {(items).map(({ id, name, tooltip }) => {
        const key = `step-${id}`;
        return (
          <li key={key} className={classnames('step-item', { active: id === active })}>
            <a href="#" className="tooltip" data-tooltip={tooltip}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};
Step.defaultProps = {
  items: [],
  active: '',
};

export default Step;
