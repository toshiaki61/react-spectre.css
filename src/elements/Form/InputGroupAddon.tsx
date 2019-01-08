import React, {FC} from 'react'

import cx from 'classnames'

import {InputGroupAddonProps} from './interfaces'

const InputGroupAddon: FC<InputGroupAddonProps> = ({children, size}) => (
  <span className={cx('input-group-addon', {[`addon-${size}`]: size})}>
    {children}
  </span>
)

export default InputGroupAddon
