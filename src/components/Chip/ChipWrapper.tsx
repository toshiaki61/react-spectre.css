import React from 'react'

import {ChipWrapperProps} from './interfaces'

const ChipWrapper = ({children, htmlFor, ...rest}: ChipWrapperProps) =>
  htmlFor ? (
    <label {...rest} htmlFor={htmlFor}>
      {children}
    </label>
  ) : (
    <span {...rest}>{children}</span>
  )

export default ChipWrapper
