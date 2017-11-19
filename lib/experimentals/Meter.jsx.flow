/* @flow */
import * as React from 'react';

export type MeterProps = {
  value: number,
  optimum: number,
  min: number,
  max: number,
  low: number,
  high: number,
};
const Meter = ({ value, optimum, min, max, low, high }: MeterProps): React.Element<*> => (
  <meter className="meter" value={value} optimum={optimum} min={min} max={max} low={low} high={high} />
);
Meter.defaultProps = {};

export default Meter;
