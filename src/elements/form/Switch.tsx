import classnames from 'classnames'
import React, {ReactElement} from 'react'
import uniqueId from './uniqueId'

export interface ISwitchProps {
  children: ReactElement<any>
  className?: string
}
const Switch = ({children, className, ...props}: ISwitchProps) => {
  const classes = classnames('form-switch', className)
  const id = uniqueId('switch')
  return (
    <label className={classes} htmlFor={id}>
      <input type="checkbox" {...props} id={id} />
      <i className="form-icon" /> {children}
    </label>
  )
}
Switch.defaultProps = {
  className: '',
}
export default Switch
