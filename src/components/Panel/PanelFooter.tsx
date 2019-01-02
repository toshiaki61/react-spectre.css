import React from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelFooter = ({children, className}: PanelPartProps) => (
  <div className={cx('panel-footer', className)}>{children}</div>
)

export default PanelFooter
