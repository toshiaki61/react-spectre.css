/* @flow */
import * as React from 'react';
import classnames from 'classnames';

const sharp = '#';

export type ItemProps = {
  id: string,
  name: string,
  tooltip: string,
};
export type StepProps = {
  items: Array<ItemProps>,
  active?: string,
};
const Step = ({ items, active }: StepProps): React.Element<*> | null => {
  if (!items.length) {
    return null;
  }
  return (
    <ul className="step">
      {(items).map(({ id, name, tooltip }) => {
        const key = `step-${id}`;
        return (
          <li key={key} className={classnames('step-item', { active: id === active })}>
            <a href={sharp} className="tooltip" data-tooltip={tooltip}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};
Step.defaultProps = {
  active: '',
};

export default Step;
