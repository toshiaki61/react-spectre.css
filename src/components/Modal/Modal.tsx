import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'
import {attr} from '@utils/attr'

import {ModalProps} from './interfaces'

import ModalBody from './ModalBody'
import ModalContainer from './ModalContainer'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalOverlay from './ModalOverlay'
import ModalTitle from './ModalTitle'

const Modal = ({
  active,
  title,
  content,
  footer,
  size,
  className,
  onClearClick,
  children,
}: ModalProps): ReactElement<ModalProps> => (
  <div
    className={cx('modal', className, {
      active,
      [`modal-${size}`]: size,
    })}
  >
    {children ? (
      children
    ) : (
      <Fragment>
        <ModalOverlay onClearClick={onClearClick} />
        <ModalContainer>
          <ModalHeader>
            <Button
              clearButton
              onClick={onClearClick}
              {...attr({floating: 'right'})}
            />
            {title ? <ModalTitle className="h5">{title}</ModalTitle> : null}
          </ModalHeader>
          {content ? <ModalBody>{content}</ModalBody> : null}
          {footer ? <ModalFooter>{footer}</ModalFooter> : null}
        </ModalContainer>
      </Fragment>
    )}
  </div>
)

Modal.defaultProps = {
  active: false,
  title: '',
  content: null,
  footer: null,
  small: false,
  large: false,
}

export default Modal
