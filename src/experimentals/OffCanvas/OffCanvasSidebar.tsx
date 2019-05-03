import * as React from 'react'

import cx from 'clsx'

import {OffCanvasSidebarProps} from './interfaces'

const OffCanvasSidebar: React.FC<OffCanvasSidebarProps> = ({
  children,
  className,
  id,
}) => (
  <div id={id} className={cx('off-canvas-sidebar', className)}>
    {children}
  </div>
)

export default OffCanvasSidebar
