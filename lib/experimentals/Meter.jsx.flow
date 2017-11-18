/* @flow */
import React from 'react';

export type MeterProps = {
  value: number,
  optimum: number,
  min: number,
  max: number,
  low: number,
  high: number,
};
const Meter = ({ value, optimum, min, max, low, high }: MeterProps) => (
  <meter className="meter" value={value} optimum={optimum} min={min} max={max} low={low} high={high} />
);
Meter.defaultProps = {
  value: 0,
  optimum: 90,
  min: 0,
  max: 100,
  low: 30,
  high: 80,
};

export default Meter;
