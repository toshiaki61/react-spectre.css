import * as React from 'react'

import cx from 'clsx'

import {PanelPartProps} from './interfaces'

const PanelTitle: React.FC<PanelPartProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('panel-title', className)} {...rest}>
    {children}
  </div>
)

export default PanelTitle
