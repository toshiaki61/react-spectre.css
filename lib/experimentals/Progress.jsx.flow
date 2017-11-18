/* @flow */
import React from 'react';

export type ProgressProps = {
  max: number,
};
const Progress = ({ max, ...props }: ProgressProps) => (
  <progress className="progress" max={max} {...props} />
);
Progress.defaultProps = {
  max: 100,
};

export default Progress;
