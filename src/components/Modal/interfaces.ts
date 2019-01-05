import {MouseEventHandler, ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export type ModalSizeType = 'sm' | 'lg'

export interface ModalProps {
  active?: boolean
  title?: string
  content?: ReactNode
  footer?: ReactNode
  size?: ModalSizeType
  className?: string
  onClearClick?: MouseEventHandler
  children?: ReactNode
}

export type ModalPartProps = Partial<BasePartProps>

export interface ModalCloseable {
  onClearClick?: MouseEventHandler
}
