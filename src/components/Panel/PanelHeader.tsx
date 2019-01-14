import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelHeader: FC<PanelPartProps> = ({children, className, ...rest}) => (
  <div className={cx('panel-header', className)} {...rest}>
    {children}
  </div>
)

export default PanelHeader
