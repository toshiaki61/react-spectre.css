import React, {SFC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelTitle: SFC<PanelPartProps> = ({children, className}) => (
  <div className={cx('panel-title', className)}>{children}</div>
)

export default PanelTitle
