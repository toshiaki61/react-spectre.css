import * as React from 'react'

import cx from 'clsx'

import {InputGroupAddonProps} from './interfaces'

const InputGroupAddon: React.FC<InputGroupAddonProps> = ({
  children,
  formSize,
}) => (
  <span className={cx('input-group-addon', {[`addon-${formSize}`]: formSize})}>
    {children}
  </span>
)

export default InputGroupAddon
