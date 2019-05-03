import * as React from 'react'

import {AvatarProps} from '../Avatar'

import {StyleProps} from '../../interfaces'

export interface ChipBaseProps extends Partial<StyleProps> {
  htmlFor?: string
}
export interface ChipAttrProps extends ChipBaseProps {
  content: React.ReactNode
  clear?: boolean
  icon?: React.ReactNode
  avatar?: AvatarProps
  onClearClick?: React.MouseEventHandler
}
export interface ChipChildrenProps extends ChipBaseProps {
  children: React.ReactNode
}
export type ChipProps = ChipAttrProps | ChipChildrenProps

export interface ChipWrapperProps extends ChipBaseProps {
  children: React.ReactNode
  htmlFor: string
}
