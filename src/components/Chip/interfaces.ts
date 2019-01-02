import {MouseEventHandler, ReactNode} from 'react'

import {AvatarProps} from '@components/Avatar'

export interface ChipProps {
  className?: string
  clear?: boolean
  icon?: ReactNode
  avatar?: AvatarProps
  content?: ReactNode
  onClearClick?: MouseEventHandler
  children?: ReactNode
}
