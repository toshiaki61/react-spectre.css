import React, {Fragment, SFC} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'
import {attr} from '@utils/attr'

import {ToastProps} from './interfaces'
import {hasToastChildren} from './util'

function renderToast(p: ToastProps) {
  if (hasToastChildren(p)) {
    return p.children
  }
  const {content, title, onClearClick} = p
  return (
    <Fragment>
      {onClearClick ? (
        <Button
          clearButton
          {...attr({floating: 'right'})}
          onClick={onClearClick}
        />
      ) : null}
      {title ? <h5>{title}</h5> : null}
      {content}
    </Fragment>
  )
}
const Toast: SFC<ToastProps> = p => (
  <div
    className={cx('toast', p.className, {
      [`toast-${p.color}`]: p.color,
    })}
  >
    {renderToast(p)}
  </div>
)

export default Toast
