import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export type PopoverPosition = 'right' | 'left' | 'bottom'

export interface PopoverProps {
  target?: ReactNode
  content?: ReactNode
  children?: ReactNode
  position?: PopoverPosition
  className?: string
}

export type PopoverPartProps = Partial<BasePartProps>
