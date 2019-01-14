import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelFooter: FC<PanelPartProps> = ({children, className, ...rest}) => (
  <div className={cx('panel-footer', className)} {...rest}>
    {children}
  </div>
)

export default PanelFooter
