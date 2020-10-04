import * as React from 'react'

import cx from 'clsx'

import {PanelPartProps} from './interfaces'

const PanelNav: React.FC<PanelPartProps> = ({children, className, ...rest}) => (
  <div className={cx('panel-nav', className)} {...rest}>
    {children}
  </div>
)

export default PanelNav
