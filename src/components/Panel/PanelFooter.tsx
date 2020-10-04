import * as React from 'react'

import cx from 'clsx'

import {PanelPartProps} from './interfaces'

const PanelFooter: React.FC<PanelPartProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('panel-footer', className)} {...rest}>
    {children}
  </div>
)

export default PanelFooter
