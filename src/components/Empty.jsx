/* @flow */
import React from 'react';
import classnames from 'classnames';

import Icon from '../Icon';

export type TitleProps = {
  children: React.DOM,
  className?: string,
};
const Title = ({ children, className, ...props }: TitleProps) => {
  const classes = classnames('empty-title', 'h5', className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
Title.defaultProps = {
  className: '',
};

export type SubtitleProps = {
  children?: React.DOM,
  className?: string,
};
const Subtitle = ({ children, className, ...props }: SubtitleProps) => {
  const classes = classnames('empty-subtitle', className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};
Subtitle.defaultProps = {
  children: null,
  className: '',
};

export type EmptyProps = {
  children?: React.DOM,
  className?: string,
  icon?: string,
  title?: string,
  subtitle?: string,
};
const Empty = ({ children, className, icon, title, subtitle, ...props }: EmptyProps) => {
  const classes = classnames('empty', className);
  return (
    <div className={classes} {...props}>
      {icon ? <Icon className={`icon-${icon}`} style={{ fontSize: '4rem' }} /> : null}
      {title ? <Title>{title}</Title> : null}
      {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      {children}
    </div>
  );
};
Empty.defaultProps = {
  children: null,
  className: '',
  icon: '',
  title: null,
  subtitle: null,
};

export default Empty;
