import * as React from 'react'

import {BasePartProps} from '../../interfaces'

export interface OffCanvasSidebarProps {
  children: React.ReactNode
  className?: string
  id: string
}

export interface OffCanvasAttrProps {
  sidebarId: string
  sidebarContent?: React.ReactNode
  content?: React.ReactNode
}
export interface OffCanvasChildrenProps {
  children: React.ReactNode
}
export type OffCanvasProps = OffCanvasAttrProps | OffCanvasChildrenProps

export type OffCanvasContentProps = Partial<BasePartProps>

export interface OffCanvasToggleProps {
  children: React.ReactNode
  sidebarId: string
}
