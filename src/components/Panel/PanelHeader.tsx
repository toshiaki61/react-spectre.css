import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelHeader: FC<PanelPartProps> = ({children, className}) => (
  <div className={cx('panel-header', className)}>{children}</div>
)

export default PanelHeader
