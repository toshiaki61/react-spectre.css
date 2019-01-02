import {ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

import {IconType} from '@elements/Icon'

export type EmptyPartProps = Partial<BasePartProps>

export interface EmptyProps {
  children?: ReactNode
  className?: string
  iconType?: IconType
  title?: ReactNode
  subtitle?: ReactNode
  action?: ReactNode
}
