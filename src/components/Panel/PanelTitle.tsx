import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelTitle: FC<PanelPartProps> = ({children, className, ...rest}) => (
  <div className={cx('panel-title', className)} {...rest}>
    {children}
  </div>
)

export default PanelTitle
