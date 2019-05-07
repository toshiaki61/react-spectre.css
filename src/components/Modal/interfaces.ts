import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export type ModalSizeType = 'sm' | 'lg'

export interface ModalBaseProps extends Partial<StyleProps> {
  active: boolean
  /** 'sm' | 'lg' */
  size: ModalSizeType
}

export interface ModalAttrProps extends Partial<ModalBaseProps> {
  content: React.ReactNode
  onClearClick: React.MouseEventHandler
  title?: string
  footer?: React.ReactNode
}

export interface ModalChildrenProps extends Partial<ModalBaseProps> {
  children: React.ReactNode
}

export type ModalProps = ModalAttrProps | ModalChildrenProps

export type ModalPartProps = Partial<BasePartProps>

export interface ModalCloseable {
  onClearClick?: React.MouseEventHandler
}
