import React, {FC} from 'react'

import cx from 'classnames'

import {InputGroupAddonProps} from './interfaces'

const InputGroupAddon: FC<InputGroupAddonProps> = ({children, formSize}) => (
  <span className={cx('input-group-addon', {[`addon-${formSize}`]: formSize})}>
    {children}
  </span>
)

export default InputGroupAddon
