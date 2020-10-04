import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export interface TileBaseProps extends Partial<StyleProps> {
  compact?: boolean
}

export interface TileAttrProps extends TileBaseProps {
  content: React.ReactNode | React.ReactNodeArray
  title?: React.ReactNode
  subtitle?: React.ReactNode
  icon?: React.ReactNode
  action?: React.ReactNode
}

export interface TileChildrenProps extends TileBaseProps {
  children: React.ReactNode
}

export type TileProps = TileAttrProps | TileChildrenProps

export type TilePartProps = Partial<BasePartProps>
