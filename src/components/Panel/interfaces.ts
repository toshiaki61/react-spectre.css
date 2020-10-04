import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export interface PanelProps extends Partial<StyleProps> {
  header?: React.ReactNode
  nav?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
  headerClass?: string
  children?: React.ReactNode
}

export type PanelPartProps = Partial<BasePartProps>
