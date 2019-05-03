import * as React from 'react'

import {StyleProps} from '../../interfaces'

export type HeroSizeType = 'lg' | 'sm'

export interface HeroBaseProps extends Partial<StyleProps> {
  size?: HeroSizeType
}
export interface HeroAttrProps extends HeroBaseProps {
  title: React.ReactNode
  content: React.ReactNode
}
export interface HeroChildrenProps extends HeroBaseProps {
  children: React.ReactNode
}
export type HeroProps = HeroAttrProps | HeroChildrenProps

export interface HeroBodyProps {
  children?: React.ReactNode
  className?: string
}
