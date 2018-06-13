/* @flow */
import * as React from 'react'
import classnames from 'classnames'

import Form from './Form'
import uniqueId from './uniqueId'

export type BaseInputProps = {
  className: string,
  success: boolean,
  danger: boolean,
  sm: boolean,
  lg: boolean,
  textarea: boolean,
  slider: boolean,
}
const BaseInput = ({
  className,
  success,
  danger,
  textarea,
  slider,
  sm,
  lg,
  ...props
}: BaseInputProps): React.Element<*> => {
  const classes = classnames(className, {
    'form-input': !slider,
    'is-success': success,
    'is-danger': danger,
    'input-lg': lg,
    'input-sm': sm,
  })
  if (textarea) {
    return <textarea className={classes} {...props} />
  }
  if (slider) {
    return <input {...props} type="range" className="slider tooltip" />
  }
  return <input {...props} className={classes} />
}
BaseInput.defaultProps = {}

export type InputProps = BaseInputProps & {
  label?: string,
  id?: string,
}
const Input = ({label, id, ...props}: InputProps): React.Element<*> => {
  const elementId = id || uniqueId('input')
  const content = <BaseInput id={elementId} {...props} />
  if (label) {
    return (
      <Form.Group>
        <Form.Label htmlFor={elementId}>{label}</Form.Label>
        {content}
      </Form.Group>
    )
  }
  return content
}
Input.defaultProps = {
  className: '',
  success: false,
  danger: false,
  sm: false,
  lg: false,
  textarea: false,
  label: '',
  id: '',
}

export type GroupProps = {
  children: React.DOM,
  className?: string,
  success?: boolean,
  danger?: boolean,
}
const Group = ({
  children,
  className,
  success,
  danger,
  ...props
}: GroupProps): React.Element<*> => {
  const classes = classnames('input-group', className, {
    'has-success': success,
    'has-danger': danger,
  })
  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
Group.defaultProps = {
  className: '',
  success: false,
  danger: false,
}

export type AddonProps = {
  children: React.DOM,
  className?: string,
  sm?: boolean,
  lg?: boolean,
}

const Addon = ({
  children,
  className,
  sm,
  lg,
  ...props
}: AddonProps): React.Element<*> => {
  const classes = classnames('input-group-addon', className, {
    'addon-sm': sm,
    'addon-lg': lg,
  })
  return (
    <span {...props} className={classes}>
      {children}
    </span>
  )
}
Addon.defaultProps = {
  className: '',
  sm: false,
  lg: false,
}

Input.Group = Group
Input.Addon = Addon

export default Input
