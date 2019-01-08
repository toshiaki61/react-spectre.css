import React, {FC} from 'react'

import cx from 'classnames'

import {OffCanvasSidebarProps} from './interfaces'

const OffCanvasSidebar: FC<OffCanvasSidebarProps> = ({
  children,
  className,
  id,
}) => (
  <div id={id} className={cx('off-canvas-sidebar', className)}>
    {children}
  </div>
)

export default OffCanvasSidebar
