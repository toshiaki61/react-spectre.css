import {ReactElement, ReactNode} from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export interface CardItemHeaderProps {
  button: ReactNode
  title: ReactNode
  subtitle: ReactNode
}

export type CardType = 'image' | 'body' | 'footer' | 'header'

export interface CardItemProps {
  className?: string
  type?: CardType
  content?: CardItemHeaderProps | ReactNode
}

export interface CardAttrProps extends Partial<StyleProps> {
  items: Array<CardItemProps & {id: string}>
}
export interface CardChildrenProps extends Partial<StyleProps> {
  children: ReactElement<CardItemProps> | Array<ReactElement<CardItemProps>>
}
export type CardProps = CardAttrProps | CardChildrenProps

export type CardPartProps = Partial<BasePartProps>
