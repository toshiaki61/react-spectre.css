import {ChangeEvent, ChangeEventHandler, ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export interface FilterDatum {
  tag: string
  title: string
  subtitle: string
}
export interface FilterProps {
  children?: ReactNode
  tags?: {
    [key: string]: string
  }
  data?: FilterDatum[]
  activeId?: string
  onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void
}

export interface FilterTagProps {
  id: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
export type FilterNavProps = Partial<BasePartProps>
export type FilterBodyProps = Partial<BasePartProps>
export type FilterItemProps = Partial<BasePartProps>
