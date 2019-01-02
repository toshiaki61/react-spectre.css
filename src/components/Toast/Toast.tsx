import React, {ReactElement} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'
import {attr} from '@utils/attr'

import {ToastProps} from './interfaces'

const Toast = ({
  title,
  children,
  className,
  onClearClick,
  color,
}: ToastProps): ReactElement<ToastProps> => {
  return (
    <div
      className={cx('toast', className, {
        [`toast-${color}`]: color,
      })}
    >
      {onClearClick ? (
        <Button clear {...attr({floating: 'right'})} onClick={onClearClick} />
      ) : null}
      {title ? <h5>{title}</h5> : null}
      {children}
    </div>
  )
}
Toast.defaultProps = {
  title: '',
  className: '',
  onClearClick: undefined,
}

export default Toast
