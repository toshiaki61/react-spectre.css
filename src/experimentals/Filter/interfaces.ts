import {ChangeEvent, ChangeEventHandler, ReactNode} from 'react'

import {BasePartProps, StyleProps} from '../../interfaces'

export interface FilterDatum extends Partial<StyleProps> {
  tag: string
  title: string
  subtitle: string
}

export interface FilterAttrProps {
  tags: {
    [key: string]: string
  }
  data?: FilterDatum[]
  activeId?: string
  onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void
}
export interface FilterChildrenProps {
  children: ReactNode
}
export type FilterProps = FilterAttrProps | FilterChildrenProps

export interface FilterTagProps {
  id: string
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
}
export type FilterNavProps = Partial<BasePartProps>
export type FilterBodyProps = Partial<BasePartProps>
export type FilterItemProps = Partial<BasePartProps>
