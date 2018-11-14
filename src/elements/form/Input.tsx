import classnames from 'classnames'
import React, {ChangeEvent, ReactElement} from 'react'
import Form from './Form'
import uniqueId from './uniqueId'

export interface IBaseInputProps {
  className?: string
  success?: boolean
  danger?: boolean
  sm?: boolean
  lg?: boolean
  textarea?: boolean
  slider?: boolean
  id?: string
  label?: string
  min?: number
  max?: number
  value?: any
  onChange?: (e: ChangeEvent<any>) => void
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
}: IBaseInputProps): ReactElement<IBaseInputProps> => {
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
const Input = ({
  label,
  id,
  ...props
}: IBaseInputProps): ReactElement<IBaseInputProps> => {
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
export interface IGroupProps {
  children: ReactElement<any>
  className?: string
  success?: boolean
  danger?: boolean
}
const Group = ({
  children,
  className,
  success,
  danger,
  ...props
}: IGroupProps): ReactElement<IGroupProps> => {
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
export interface IAddonProps {
  children: ReactElement<any>
  className?: string
  sm?: boolean
  lg?: boolean
}
const Addon = ({
  children,
  className,
  sm,
  lg,
  ...props
}: IAddonProps): ReactElement<IAddonProps> => {
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
