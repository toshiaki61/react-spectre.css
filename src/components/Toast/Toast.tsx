import * as React from 'react'

import cx from 'clsx'

import {Button} from '../../elements/Button'
import {attr} from '../../utilities/attr'

import {ToastProps} from './interfaces'
import {hasToastChildren} from './util'

function renderToast(p: ToastProps) {
  if (hasToastChildren(p)) {
    return p.children
  }
  const {content, title, onClearClick} = p
  const handleClearClick = onClearClick
    ? (e: React.MouseEvent) => {
        e.preventDefault()
        onClearClick(e)
      }
    : null
  return (
    <React.Fragment>
      {handleClearClick ? (
        <Button
          clearButton
          {...attr({floating: 'right'})}
          onClick={handleClearClick}
        />
      ) : null}
      {title ? <h5>{title}</h5> : null}
      {content}
    </React.Fragment>
  )
}
const Toast: React.FC<ToastProps> = p => {
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
