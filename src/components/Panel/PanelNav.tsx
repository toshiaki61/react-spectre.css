import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelNav: FC<PanelPartProps> = ({children, className}) => (
  <div className={cx('panel-nav', className)}>{children}</div>
)

export default PanelNav
