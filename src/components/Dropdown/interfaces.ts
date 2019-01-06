import {
  FocusEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react'

import {StyleProps} from '../../interfaces'

import {MenuItemProps} from '@components/Menu'

export interface DropdownBaseProps extends Partial<StyleProps> {
  active?: boolean
  right?: boolean
  initialValue?: string
  onClick: MouseEventHandler
  onBlur: FocusEventHandler
  onMenuClick?: (e: MouseEvent<any>, id: string) => void
}

export interface DropdownAttrProps extends DropdownBaseProps {
  contents: MenuItemProps[]
}

export interface DropdownChildrenProps extends DropdownBaseProps {
  children: ReactNode
}

export type DropdownProps = DropdownAttrProps | DropdownChildrenProps
