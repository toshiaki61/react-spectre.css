import * as React from 'react'

import {ButtonProps} from './interfaces'
import {isAnchorElement} from './util'

const ButtonWrapper: React.FC<Partial<ButtonProps>> = p => {
  if (isAnchorElement(p)) {
    return <a {...p}>{p.children}</a>
  }

  return <button {...p}>{p.children}</button>
}

export default ButtonWrapper
