import React, {SFC} from 'react'

import cx from 'classnames'

import {OffCanvasSidebarProps} from './interfaces'

const OffCanvasSidebar: SFC<OffCanvasSidebarProps> = ({
  children,
  className,
  id,
}) => (
  <div id={id} className={cx('off-canvas-sidebar', className)}>
    {children}
  </div>
)

export default OffCanvasSidebar
