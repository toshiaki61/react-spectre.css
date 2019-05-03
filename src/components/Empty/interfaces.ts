import * as React from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

import {IconType} from '../../elements/Icon'

export type EmptyPartProps = Partial<BasePartProps>

export interface EmptyProps extends Partial<StyleProps> {
  // children?: ReactNode
  // className?: string
  iconType?: IconType
  title?: React.ReactNode
  subtitle?: React.ReactNode
  action?: React.ReactNode
}

// export type EmptyProps
