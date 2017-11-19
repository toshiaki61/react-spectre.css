/* @flow */
import * as React from 'react';
import classnames from 'classnames';

export type FormProps = {
  children: React.DOM,
  className?: string,
  horizontal?: boolean,
};
const Form = ({ children, className, horizontal, ...props }: FormProps): React.Element<*> => {
  const classes = classnames(className, { 'form-horizontal': horizontal });
  return (
    <form {...props} className={classes} >
      {children}
    </form>
  );
};
Form.defaultProps = {
  className: '',
  horizontal: false,
};

export type GroupProps = {
  children: React.DOM,
  className?: string,
  success?: boolean,
  danger?: boolean,
};
const Group = ({
  children,
  className,
  success,
  danger,
  ...props
}: GroupProps): React.Element<*> => {
  const classes = classnames('form-group', className, { 'has-success': success, 'has-danger': danger });
  return (
    <div {...props} className={classes} >
      {children}
    </div>
  );
};
Group.defaultProps = {
  className: '',
  success: false,
  danger: false,
};

export type LabelProps = {
  children: React.DOM,
  className?: string,
  htmlFor?: string,
};
const Label = ({ children, className, htmlFor, ...props }: LabelProps) => {
  const classes = classnames('form-label', className);
  if (htmlFor) {
    return (
      <label {...props} className={classes} htmlFor={htmlFor}>
        {children}
      </label>
    );
  }
  return (
    <span {...props} className={classes}>
      {children}
    </span>
  );
};
Label.defaultProps = {
  className: '',
  htmlFor: '',
};

Form.Group = Group;
Form.Label = Label;

export default Form;
