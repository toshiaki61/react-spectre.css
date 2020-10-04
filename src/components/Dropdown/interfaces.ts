import * as React from 'react'

import {StyleProps} from '../../interfaces'

import {MenuItemProps} from '../Menu'

export interface DropdownBaseProps extends Partial<StyleProps> {
  active?: boolean
  right?: boolean
  initialValue?: string
  onClick: React.MouseEventHandler
  onBlur: React.FocusEventHandler
  onMenuClick?: (e: React.MouseEvent<any>, id: string) => void
}

export interface DropdownAttrProps extends DropdownBaseProps {
  contents: MenuItemProps[]
}

export interface DropdownChildrenProps extends DropdownBaseProps {
  children: React.ReactNode
}

export type DropdownProps = DropdownAttrProps | DropdownChildrenProps
