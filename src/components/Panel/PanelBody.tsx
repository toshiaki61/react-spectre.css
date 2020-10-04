import * as React from 'react'

import cx from 'clsx'

import {PanelPartProps} from './interfaces'

const PanelBody: React.FC<PanelPartProps> = ({
  children,
  className,
  ...rest
}) => (
  <div className={cx('panel-body', className)} {...rest}>
    {children}
  </div>
)

export default PanelBody
