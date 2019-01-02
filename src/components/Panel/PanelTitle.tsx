import React from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelTitle = ({children, className}: PanelPartProps) => (
  <div className={cx('panel-title', className)}>{children}</div>
)

export default PanelTitle
