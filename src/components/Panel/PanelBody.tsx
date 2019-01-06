import React, {SFC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelBody: SFC<PanelPartProps> = ({children, className}) => (
  <div className={cx('panel-body', className)}>{children}</div>
)

export default PanelBody
