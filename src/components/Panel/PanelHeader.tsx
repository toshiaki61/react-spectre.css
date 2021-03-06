import * as React from 'react'

import cx from 'clsx'

import {PanelPartProps} from './interfaces'

const PanelHeader: React.FC<PanelPartProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('panel-header', className)} {...rest}>
    {children}
  </div>
)

export default PanelHeader
