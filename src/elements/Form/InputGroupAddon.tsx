import React, {SFC} from 'react'

import cx from 'classnames'

import {InputGroupAddonProps} from './interfaces'

const InputGroupAddon: SFC<InputGroupAddonProps> = ({children, size}) => (
  <span className={cx('input-group-addon', {[`addon-${size}`]: size})}>
    {children}
  </span>
)

export default InputGroupAddon
