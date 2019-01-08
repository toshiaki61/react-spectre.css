import {ReactNode} from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export type PopoverPositionType = 'right' | 'left' | 'bottom'

export interface PopoverBaseProps extends Partial<StyleProps> {
  position: PopoverPositionType
}

export interface PopoverAttrProps extends Partial<PopoverBaseProps> {
  target: ReactNode
  content: ReactNode
}

export interface PopoverChildrenProps extends Partial<PopoverBaseProps> {
  children: ReactNode
}

export type PopoverProps = PopoverAttrProps | PopoverChildrenProps

export type PopoverPartProps = Partial<BasePartProps>
