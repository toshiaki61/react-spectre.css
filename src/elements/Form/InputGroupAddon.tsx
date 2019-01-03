import React from 'react'

import cx from 'classnames'

import {InputGroupAddonProps} from './interfaces'

const InputGroupAddon = ({children, size}: InputGroupAddonProps) => (
  <span className={cx('input-group-addon', {[`addon-${size}`]: size})}>
    {children}
  </span>
)

export default InputGroupAddon
