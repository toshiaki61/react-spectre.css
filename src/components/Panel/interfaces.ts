import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface PanelProps {
  header?: ReactNode
  nav?: ReactNode
  content?: ReactNode
  footer?: ReactNode
  headerClass?: string
  className?: string
  children?: ReactNode
}

export type PanelPartProps = Partial<BasePartProps>
