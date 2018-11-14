import classnames from 'classnames'
import React, {ReactElement, ReactNode, ReactNodeArray} from 'react'
import Form from './Form'

export interface ISelectOnlyProps {
  children?: ReactNode | ReactNodeArray
  className?: string
  sm?: boolean
  lg?: boolean
}
const SelectOnly = ({
  children,
  className,
  sm,
  lg,
  ...props
}: ISelectOnlyProps): ReactElement<ISelectOnlyProps> => {
  const classes = classnames('form-select', className, {
    'select-sm': sm,
    'select-lg': lg,
  })
  return (
    <select className={classes} {...props}>
      {children}
    </select>
  )
}
SelectOnly.defaultProps = {
  children: null,
  className: '',
  sm: false,
  lg: false,
}
interface ISelectProps extends ISelectOnlyProps {
  label?: string
  options: {
    key: string
  }
}
const Select = ({
  children,
  label,
  options,
  ...props
}: ISelectProps): ReactElement<ISelectProps> => {
  const labelNode = label ? <Form.Label>{label}</Form.Label> : null
  const keys = Object.keys(options)
  if (keys.length > 0) {
    return (
      <Form.Group>
        {labelNode}
        <SelectOnly {...props}>
          {keys.map(key => (
            <option key={key}>{options[key]}</option>
          ))}
        </SelectOnly>
      </Form.Group>
    )
  }
  return <SelectOnly {...props}>{children}</SelectOnly>
}
Select.defaultProps = {
  label: '',
  options: {},
}
export default Select
