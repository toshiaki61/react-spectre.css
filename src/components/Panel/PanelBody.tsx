import React, {FC} from 'react'

import cx from 'classnames'

import {PanelPartProps} from './interfaces'

const PanelBody: FC<PanelPartProps> = ({children, className, ...rest}) => (
  <div className={cx('panel-body', className)} {...rest}>
    {children}
  </div>
)

export default PanelBody
