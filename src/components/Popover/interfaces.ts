import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export type PopoverPositionType = 'right' | 'left' | 'bottom'

export interface PopoverProps {
  target?: ReactNode
  content?: ReactNode
  children?: ReactNode
  position?: PopoverPositionType
  className?: string
}

export type PopoverPartProps = Partial<BasePartProps>
