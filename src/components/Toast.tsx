import React, {ReactElement} from 'react'
import classnames from 'classnames'
import Button from '../elements/Button'

export interface ToastProps {
  title?: string
  content: string
  className?: string
  onClearClick?: (e: Event) => void
  primary?: boolean
  success?: boolean
  warning?: boolean
  error?: boolean
}
const Toast = ({
  title,
  content,
  className,
  onClearClick,
  primary,
  success,
  warning,
  error,
  ...props
}: ToastProps): ReactElement<ToastProps> => {
  const classes = classnames('toast', className, {
    'toast-primary': primary,
    'toast-success': success,
    'toast-warning': warning,
    'toast-error': error,
  })
  return (
    <div className={classes} {...props}>
      {onClearClick ? (
        <Button clear className="float-right" onClick={onClearClick} />
      ) : null}
      {title ? <h5>{title}</h5> : null}
      {content}
    </div>
  )
}
Toast.defaultProps = {
  title: '',
  className: '',
  onClearClick: undefined,
  primary: false,
  success: false,
  warning: false,
  error: false,
}
export default Toast
