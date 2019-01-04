import React from 'react'

import cx from 'classnames'

import {OffCanvasSidebarProps} from './interfaces'

const OffCanvasSidebar = ({children, className, id}: OffCanvasSidebarProps) => (
  <div id={id} className={cx('off-canvas-sidebar', className)}>
    {children}
  </div>
)

export default OffCanvasSidebar
