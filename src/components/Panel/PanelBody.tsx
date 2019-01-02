import React from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelBody = ({children, className}: PanelPartProps) => (
  <div className={cx('panel-body', className)}>{children}</div>
)

export default PanelBody
