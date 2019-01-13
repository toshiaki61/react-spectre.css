import {MouseEventHandler, ReactNode} from 'react'

import {AvatarProps} from '@components/Avatar'

import {StyleProps} from '../../interfaces'

export interface ChipBaseProps extends Partial<StyleProps> {
  htmlFor?: string
}
export interface ChipAttrProps extends ChipBaseProps {
  content: ReactNode
  clear?: boolean
  icon?: ReactNode
  avatar?: AvatarProps
  onClearClick?: MouseEventHandler
}
export interface ChipChildrenProps extends ChipBaseProps {
  children: ReactNode
}
export type ChipProps = ChipAttrProps | ChipChildrenProps

export interface ChipWrapperProps extends ChipBaseProps {
  children: ReactNode
  htmlFor: string
}
