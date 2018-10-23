import React, {ReactElement} from 'react'
import classnames from 'classnames'

export interface FormProps {
  children: ReactElement<any>
  className?: string
  horizontal?: boolean
}
const Form = ({
  children,
  className,
  horizontal,
  ...props
}: FormProps): ReactElement<FormProps> => {
  const classes = classnames(className, {'form-horizontal': horizontal})
  return (
    <form {...props} className={classes}>
      {children}
    </form>
  )
}
Form.defaultProps = {
  className: '',
  horizontal: false,
}
export interface GroupProps {
  children: ReactElement<any> | ReactElement<any>[]
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
}: GroupProps): ReactElement<GroupProps> => {
  const classes = classnames('form-group', className, {
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
export interface LabelProps {
  children: ReactElement<any> | string
  className?: string
  htmlFor?: string
}
const Label = ({children, className, htmlFor, ...props}: LabelProps) => {
  const classes = classnames('form-label', className)
  if (htmlFor) {
    return (
      <label {...props} className={classes} htmlFor={htmlFor}>
        {children}
      </label>
    )
  }
  return (
    <span {...props} className={classes}>
      {children}
    </span>
  )
}
Label.defaultProps = {
  className: '',
  htmlFor: '',
}
Form.Group = Group
Form.Label = Label
export default Form
