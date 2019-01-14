import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelNav: FC<PanelPartProps> = ({children, className, ...rest}) => (
  <div className={cx('panel-nav', className)} {...rest}>
    {children}
  </div>
)

export default PanelNav
