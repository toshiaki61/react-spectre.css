import React, {FC} from 'react'

import {ChipWrapperProps} from './interfaces'

const ChipWrapper: FC<ChipWrapperProps> = ({children, htmlFor, ...rest}) =>
  htmlFor ? (
    <label {...rest} htmlFor={htmlFor}>
      {children}
    </label>
  ) : (
    <span {...rest}>{children}</span>
  )

export default ChipWrapper
