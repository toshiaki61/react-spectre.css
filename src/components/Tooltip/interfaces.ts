import {ReactNode} from 'react'

import {TooltipPositionType} from '@utils/attr/interfaces'

export interface TooltipProps {
  children: ReactNode
  text: string
  position?: TooltipPositionType
}
