import classnames from 'classnames'
import React, {MouseEvent, ReactElement, ReactNode} from 'react'

import Button from '../elements/Button'
import noop from '../utilities/noop'

export interface IModalProps {
  active?: boolean
  title?: string
  content?: ReactNode
  footer?: ReactNode
  small?: boolean
  large?: boolean
  onClearClick?: (e: MouseEvent<any>) => void
}

const Modal = ({
  active,
  title,
  content,
  footer,
  small,
  large,
  onClearClick,
  ...props
}: IModalProps): ReactElement<IModalProps> => {
  const classes = classnames('modal', {
    active,
    'modal-sm': small,
    'modal-lg': large,
  })
  return (
    <div className={classes} {...props}>
      <div className="modal-overlay" onClick={onClearClick} />
      <div className="modal-container">
        <div className="modal-header">
          <Button clear className="float-right" onClick={onClearClick} />
          {title ? <div className="modal-title h5">{title}</div> : null}
        </div>
        {content ? (
          <div className="modal-body">
            <div className="content">{content}</div>
          </div>
        ) : null}
        {footer ? <div className="modal-footer">{footer}</div> : null}
      </div>
    </div>
  )
}
Modal.defaultProps = {
  active: false,
  title: '',
  content: null,
  footer: null,
  small: false,
  large: false,
  onClearClick: noop,
}
export default Modal
