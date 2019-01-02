import React from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelHeader = ({children, className}: PanelPartProps) => (
  <div className={cx('panel-header', className)}>{children}</div>
)

export default PanelHeader
