import {MouseEventHandler, ReactNode} from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export type ModalSizeType = 'sm' | 'lg'

export interface ModalBaseProps extends Partial<StyleProps> {
  active: boolean
  size: ModalSizeType
}

export interface ModalAttrProps extends Partial<ModalBaseProps> {
  content: ReactNode
  onClearClick: MouseEventHandler
  title?: string
  footer?: ReactNode
}

export interface ModalChildrenProps extends Partial<ModalBaseProps> {
  children: ReactNode
}

export type ModalProps = ModalAttrProps | ModalChildrenProps

export type ModalPartProps = Partial<BasePartProps>

export interface ModalCloseable {
  onClearClick?: MouseEventHandler
}
