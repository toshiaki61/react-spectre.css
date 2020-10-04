import * as React from 'react'
import {StyleProps} from '../../interfaces'

export type ContainerGridSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ContainerProps extends Partial<StyleProps> {
  children: React.ReactNode
  /** 'xs' | 'sm' | 'md' | 'lg' | 'xl' */
  size?: ContainerGridSizeType
}
