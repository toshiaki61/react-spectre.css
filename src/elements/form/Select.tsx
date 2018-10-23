import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Form from './Form'

export interface SelectOnlyProps {
  children?: ReactElement<any> | ReactElement<any>[]
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
}: SelectOnlyProps): ReactElement<SelectOnlyProps> => {
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
interface SelectProps extends SelectOnlyProps {
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
}: SelectProps): ReactElement<SelectProps> => {
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
