import React, {SFC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelFooter: SFC<PanelPartProps> = ({children, className}) => (
  <div className={cx('panel-footer', className)}>{children}</div>
)

export default PanelFooter
