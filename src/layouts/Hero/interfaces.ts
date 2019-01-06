import {ReactNode} from 'react'

import {StyleProps} from '../../interfaces'

export type HeroSizeType = 'lg' | 'sm'

export interface HeroBaseProps extends Partial<StyleProps> {
  size?: HeroSizeType
}
export interface HeroAttrProps extends HeroBaseProps {
  title: ReactNode
  content: ReactNode
}
export interface HeroChildrenProps extends HeroBaseProps {
  children: ReactNode
}
export type HeroProps = HeroAttrProps | HeroChildrenProps

export interface HeroBodyProps {
  children?: ReactNode
  className?: string
}
