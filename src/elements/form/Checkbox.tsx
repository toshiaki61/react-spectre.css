import classnames from 'classnames'
import React, {ReactChildren, ReactElement} from 'react'
import uniqueId from './uniqueId'

export interface ICheckboxSingleProps {
  children?: ReactChildren
  label: string
  className?: string
  value?: string
}
const CheckboxSingle = ({
  children,
  label,
  className,
  ...props
}: ICheckboxSingleProps): ReactElement<ICheckboxSingleProps> => {
  const classes = classnames('form-checkbox', className)
  const id = uniqueId('checkbox')
  return (
    <label className={classes} htmlFor={id} {...props}>
      <input id={id} type="checkbox" />
      <i className="form-icon" /> {label} {children}
    </label>
  )
}
CheckboxSingle.defaultProps = {
  children: null,
  className: '',
}
interface ICheckboxProps extends ICheckboxSingleProps {
  options: {
    key: string
  }
}
const Checkbox = ({
  className,
  label,
  options,
  ...props
}: ICheckboxProps): ReactElement<ICheckboxProps> => {
  const keys = Object.keys(options)
  if (keys.length === 0) {
    return <CheckboxSingle label={label} className={className} {...props} />
  }
  const list = keys.map(key => (
    <CheckboxSingle
      key={key}
      label={options[key]}
      className={className}
      value={key}
      {...props}
    />
  ))
  return (
    <div className="form-group">
      <span className="form-label">{label}</span>
      {list}
    </div>
  )
}
Checkbox.defaultProps = {
  options: {},
}
export default Checkbox
