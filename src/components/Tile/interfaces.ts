import {CSSProperties, ReactNode, ReactNodeArray} from 'react'

import {BasePartProps} from '../../interfaces'

export interface TileProps {
  compact?: boolean
  title?: ReactNode
  subtitle?: ReactNode
  content?: ReactNode | ReactNodeArray
  icon?: ReactNode
  style?: CSSProperties
  action?: ReactNode
}

export type TilePartProps = Partial<BasePartProps>
