import {
  CSSProperties,
  MouseEventHandler,
  ReactNode,
  ReactNodeArray,
} from 'react'

export type ButtonSize = 'lg' | 'sm'

export type ButtonColor = 'success' | 'error' | 'link' | 'primary'

export interface BaseButtonProps {
  children?: ReactNode
  className?: string
  loading?: boolean
  href?: string
  size?: ButtonSize
  color?: ButtonColor
  block?: boolean
  inputGroup?: boolean
  clear?: boolean
  actionButton?: boolean
  circle?: boolean
  onClick?: MouseEventHandler
  tabIndex?: number
  disabled?: boolean
  type?: 'button' | 'submit'
  style?: CSSProperties
}

export type ButtonProps = BaseButtonProps

export interface ButtonGroupProps {
  children: ReactNodeArray
  className?: string
  block?: boolean
}
