import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export type PopoverPositionType = 'right' | 'left' | 'bottom'

export interface PopoverBaseProps extends Partial<StyleProps> {
  /** 'right' | 'left' | 'bottom' */
  position: PopoverPositionType
}

export interface PopoverAttrProps extends Partial<PopoverBaseProps> {
  target: React.ReactNode
  content: React.ReactNode
}

export interface PopoverChildrenProps extends Partial<PopoverBaseProps> {
  children: React.ReactNode
}

export type PopoverProps = PopoverAttrProps | PopoverChildrenProps

export type PopoverPartProps = Partial<BasePartProps>
