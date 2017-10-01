/* @flow */
import React from 'react';
import classnames from 'classnames';
import noop from 'noop';

import Button from '../Button';

export type ModalProps = {
  active?: boolean,
  title?: string,
  content?: React.DOM,
  footer?: React.DOM,
  small?: boolean,
  onClearClick?: (e: Event) => void,
};
const Modal = ({
  active,
  title,
  content,
  footer,
  small,
  onClearClick,
  ...props
}: ModalProps) => {
  const classes = classnames('modal', {
    active,
    'modal-sm': small,
  });
  return (
    <div className={classes} {...props}>
      <div className="modal-overlay" />
      <div className="modal-container">
        <div className="modal-header">
          <Button clear className="float-right" onClick={onClearClick} />
          {title ? <div className="modal-title h5">{title}</div> : null}
        </div>
        {content ? <div className="modal-body">
          <div className="content">
            {content}
          </div>
        </div> : null}
        {footer ? <div className="modal-footer">
          {footer}
        </div> : null}
      </div>
    </div>
  );
};
Modal.defaultProps = {
  active: false,
  title: '',
  content: null,
  footer: null,
  small: false,
  onClearClick: noop,
};

export default Modal;
