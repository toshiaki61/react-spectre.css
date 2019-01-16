import React, {FC, Fragment, MouseEvent} from 'react'

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
  const handleClearClick = onClearClick
    ? (e: MouseEvent) => {
        e.preventDefault()
        onClearClick(e)
      }
    : null
  return (
    <Fragment>
      {handleClearClick ? (
        <Button
          clearButton
          {...attr({floating: 'right'})}
          onClick={handleClearClick}
        />
      ) : null}
      {title ? <h5>{title}</h5> : null}
      {content}
    </Fragment>
  )
}
const Toast: FC<ToastProps> = p => {
  const style = p.style ? {style: p.style} : {}
  return (
    <div
      className={cx('toast', p.className, {
        [`toast-${p.color}`]: p.color,
      })}
      {...style}
    >
      {renderToast(p)}
    </div>
  )
}

export default Toast
