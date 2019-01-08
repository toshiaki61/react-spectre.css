import React, {FC, Fragment} from 'react'

import cx from 'classnames'

import {Button} from '@elements/Button'
import {attr} from '@utils/attr'

import {ModalProps} from './interfaces'
import {hasModalChildren} from './util'

import ModalBody from './ModalBody'
import ModalContainer from './ModalContainer'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalOverlay from './ModalOverlay'
import ModalTitle from './ModalTitle'

function renderModal(p: ModalProps) {
  if (hasModalChildren(p)) {
    return p.children
  }
  const {title, content, footer, onClearClick} = p
  return (
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
  )
}
const Modal: FC<ModalProps> = p => {
  const {active, size, className} = p
  return (
    <div
      className={cx('modal', className, {
        active,
        [`modal-${size}`]: size,
      })}
    >
      {renderModal(p)}
    </div>
  )
}

export default Modal
