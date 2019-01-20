import React, { Fragment } from 'react';
import cx from 'classnames';
import { Button } from '@elements/Button';
import { attr } from '@utils/attr';
import { hasModalChildren } from './util';
import ModalBody from './ModalBody';
import ModalContainer from './ModalContainer';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';
import ModalOverlay from './ModalOverlay';
import ModalTitle from './ModalTitle';
function renderModal(p) {
    if (hasModalChildren(p)) {
        return p.children;
    }
    var title = p.title, content = p.content, footer = p.footer, onClearClick = p.onClearClick;
    return (<Fragment>
      <ModalOverlay onClearClick={onClearClick}/>
      <ModalContainer>
        <ModalHeader>
          <Button clearButton onClick={onClearClick} {...attr({ floating: 'right' })}/>
          {title ? <ModalTitle className="h5">{title}</ModalTitle> : null}
        </ModalHeader>
        {content ? <ModalBody>{content}</ModalBody> : null}
        {footer ? <ModalFooter>{footer}</ModalFooter> : null}
      </ModalContainer>
    </Fragment>);
}
var Modal = function (p) {
    var _a;
    var active = p.active, size = p.size, className = p.className;
    return (<div className={cx('modal', className, (_a = {
            active: active
        },
        _a["modal-" + size] = size,
        _a))}>
      {renderModal(p)}
    </div>);
};
export default Modal;
//# sourceMappingURL=Modal.jsx.map