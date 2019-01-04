import {CSSProperties, ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface CardItemHeaderProps {
  button: ReactNode
  title: ReactNode
  subtitle: ReactNode
}

export type CardType = 'image' | 'body' | 'footer' | 'header'

export interface CardItemProps {
  id: string
  className?: string
  type?: CardType
  content?: CardItemHeaderProps | ReactNode
}

export interface CardProps {
  items?: CardItemProps[]
  children?: ReactNode
  className?: string
  style?: CSSProperties
}

export type CardPartProps = Partial<BasePartProps>
