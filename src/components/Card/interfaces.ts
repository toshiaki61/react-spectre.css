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
  /** 'image' | 'body' | 'footer' | 'header' */
  type?: CardType
  content?: CardItemHeaderProps | React.ReactNode
}

export interface CardAttrProps extends Partial<StyleProps> {
  items: (CardItemProps & {id: string})[]
}
export interface CardChildrenProps extends Partial<StyleProps> {
  children:
    | React.ReactElement<CardItemProps>
    | React.ReactElement<CardItemProps>[]
}
export type CardProps = CardAttrProps | CardChildrenProps

export type CardPartProps = Partial<BasePartProps>
