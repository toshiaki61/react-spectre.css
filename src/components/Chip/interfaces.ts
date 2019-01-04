import {MouseEventHandler, ReactNode} from 'react'

import {AvatarProps} from '@components/Avatar'

export interface ChipProps {
  className?: string
  htmlFor?: string
  clear?: boolean
  icon?: ReactNode
  avatar?: AvatarProps
  content?: ReactNode
  onClearClick?: MouseEventHandler
  children?: ReactNode
}

export interface ChipWrapperProps {
  children: ReactNode
  htmlFor?: string
  className: string
}
