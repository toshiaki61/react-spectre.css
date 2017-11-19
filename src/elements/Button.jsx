/* @flow */
import * as React from 'react';
import classnames from 'classnames';

export type ButtonProps = {
  children?: React.Node,
  className?: string,
  loading?: boolean,
  href?: string,
  lg?: boolean,
  sm?: boolean,
  block?: boolean,
  inputGroup?: boolean,
  primary?: boolean,
  clear?: boolean,
  link?: boolean,
  action?: boolean,
  circle?: boolean,
};
const Button = ({
  children,
  className,
  loading,
  href,
  lg,
  sm,
  block,
  inputGroup,
  primary,
  clear,
  link,
  action,
  circle,
  ...props
}: ButtonProps) => {
  const linkButton = link || href;
  const classes = classnames(
    'btn',
    {
      loading,
      'btn-lg': lg,
      'btn-sm': sm,
      'btn-block': block,
      'input-group-btn': inputGroup,
      'btn-primary': primary,
      'btn-clear': clear,
      'btn-link': linkButton && !primary,
      'btn-action': action,
      circle,
    },
    className,
  );

  let toReturn = null;
  if (href) {
    toReturn = <a href={href} className={classes} {...props}>{children}</a>;
  } else {
    toReturn = <button className={classes} {...props}>{children}</button>;
  }

  return toReturn;
};

export type GroupProps = {
  children: React.Node,
  className?: string,
  block?: boolean,
};
const Group = ({ children, className, block }: GroupProps) => {
  const classes = classnames(
    'btn-group',
    { 'btn-group-block': block },
    className,
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
Group.defaultProps = {
  className: '',
  block: false,
};

Button.Group = Group;

export default Button;
