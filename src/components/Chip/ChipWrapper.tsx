import React, {SFC} from 'react'

import {ChipWrapperProps} from './interfaces'

const ChipWrapper: SFC<ChipWrapperProps> = ({children, htmlFor, ...rest}) =>
  htmlFor ? (
    <label {...rest} htmlFor={htmlFor}>
      {children}
    </label>
  ) : (
    <span {...rest}>{children}</span>
  )

export default ChipWrapper
