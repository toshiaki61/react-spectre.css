import {
  FocusEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react'

import {MenuItemProps} from '@components/Menu'

export interface DropdownProps {
  className?: string
  active?: boolean
  right?: boolean
  initialValue?: string
  contents?: MenuItemProps[]
  onClick: MouseEventHandler
  onMenuClick?: (e: MouseEvent<any>, id: string) => void
  onBlur: FocusEventHandler
  children?: ReactNode
}
