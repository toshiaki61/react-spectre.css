import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelFooter: FC<PanelPartProps> = ({children, className}) => (
  <div className={cx('panel-footer', className)}>{children}</div>
)

export default PanelFooter
