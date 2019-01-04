import {CSSProperties, ReactNode, ReactNodeArray} from 'react'

import {BasePartProps} from '../../interfaces'

export interface TileProps {
  children?: ReactNode
  className?: string
  compact?: boolean
  title?: ReactNode
  subtitle?: ReactNode
  content?: ReactNode | ReactNodeArray
  icon?: ReactNode
  style?: CSSProperties
  action?: ReactNode
}

export type TilePartProps = Partial<BasePartProps>
