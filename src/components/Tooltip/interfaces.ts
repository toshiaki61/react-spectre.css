import * as React from 'react'

import {TooltipPositionType} from '../../utilities/attr/interfaces'

export interface TooltipProps {
  children: React.ReactNode
  text: string
  /** 'right' | 'left' | 'bottom' */
  position?: TooltipPositionType
}
