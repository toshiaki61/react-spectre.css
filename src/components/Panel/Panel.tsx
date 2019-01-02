import React, {Fragment, ReactElement} from 'react'

import cx from 'classnames'

import {PanelProps} from './interfaces'

import PanelBody from './PanelBody'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import PanelNav from './PanelNav'
import PanelTitle from './PanelTitle'

const Panel = ({
  header,
  nav,
  content,
  footer,
  headerClass,
  className,
  children,
}: PanelProps): ReactElement<PanelProps> => {
  return (
    <div className={cx('panel', className)}>
      {children ? (
        children
      ) : (
        <Fragment>
          {header ? (
            <PanelHeader className={headerClass}>
              {typeof header === 'string' ? (
                <PanelTitle>{header}</PanelTitle>
              ) : (
                header
              )}
            </PanelHeader>
          ) : null}
          {nav ? <PanelNav>{nav}</PanelNav> : null}
          {content ? <PanelBody>{content}</PanelBody> : null}
          {footer ? <PanelFooter>{footer}</PanelFooter> : null}
        </Fragment>
      )}
    </div>
  )
}
Panel.defaultProps = {
  header: null,
  nav: null,
  content: null,
  footer: null,
  headerClass: '',
}
export default Panel
