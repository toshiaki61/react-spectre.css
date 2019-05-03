import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export interface CardItemHeaderProps {
  button: React.ReactNode
  title: React.ReactNode
  subtitle: React.ReactNode
}

export type CardType = 'image' | 'body' | 'footer' | 'header'

export interface CardItemProps {
  className?: string
  type?: CardType
  content?: CardItemHeaderProps | React.ReactNode
}

export interface CardAttrProps extends Partial<StyleProps> {
  items: Array<CardItemProps & {id: string}>
}
export interface CardChildrenProps extends Partial<StyleProps> {
  children:
    | React.ReactElement<CardItemProps>
    | Array<React.ReactElement<CardItemProps>>
}
export type CardProps = CardAttrProps | CardChildrenProps

export type CardPartProps = Partial<BasePartProps>
