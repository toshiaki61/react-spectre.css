import {MouseEventHandler, ReactNode, ReactNodeArray} from 'react'
import {StyleProps} from '../../interfaces'

export type ButtonSizeType = 'lg' | 'sm'

export type ButtonColorType = 'success' | 'error' | 'link' | 'primary'

export type ButtonType = 'button' | 'submit'

export interface BaseButtonProps extends Partial<StyleProps> {
  children?: ReactNode
  loading?: boolean
  href?: string
  size?: ButtonSizeType
  color?: ButtonColorType
  inputGroup?: boolean
  blockButton?: boolean
  clearButton?: boolean
  actionButton?: boolean
  circle?: boolean
  onClick?: MouseEventHandler
  tabIndex?: number
  disabled?: boolean
  type?: ButtonType
}

export type ButtonProps = BaseButtonProps

export interface ButtonGroupProps extends Partial<StyleProps> {
  children: ReactNodeArray
  block?: boolean
}
