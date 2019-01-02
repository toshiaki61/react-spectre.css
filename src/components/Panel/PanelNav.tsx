import React from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelNav = ({children, className}: PanelPartProps) => (
  <div className={cx('panel-nav', className)}>{children}</div>
)

export default PanelNav
