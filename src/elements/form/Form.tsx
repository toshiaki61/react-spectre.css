import classnames from 'classnames'
import React, {ReactElement, ReactNode, ReactNodeArray} from 'react'

export interface IFormProps {
  children: ReactElement<any>
  className?: string
  horizontal?: boolean
}
const Form = ({
  children,
  className,
  horizontal,
  ...props
}: IFormProps): ReactElement<IFormProps> => {
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
export interface IGroupProps {
  children: ReactNode | ReactNodeArray
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
export interface ILabelProps {
  children: ReactNode
  className?: string
  htmlFor?: string
}
const Label = ({children, className, htmlFor, ...props}: ILabelProps) => {
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
