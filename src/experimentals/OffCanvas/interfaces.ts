import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface OffCanvasSidebarProps {
  children: ReactNode
  className?: string
  id: string
}

export interface OffCanvasProps {
  children?: ReactNode
  sidebarId?: string
  sidebarContent?: ReactNode
  content?: ReactNode
}

export type OffCanvasContentProps = Partial<BasePartProps>

export interface OffCanvasToggleProps {
  children: ReactNode
  sidebarId: string
}
