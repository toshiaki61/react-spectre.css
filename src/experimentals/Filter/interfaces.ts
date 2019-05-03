import * as React from 'react'

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
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void
}
export interface FilterChildrenProps {
  children: React.ReactNode
}
export type FilterProps = FilterAttrProps | FilterChildrenProps

export interface FilterTagProps {
  id: string
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export type FilterNavProps = Partial<BasePartProps>
export type FilterBodyProps = Partial<BasePartProps>
export type FilterItemProps = Partial<BasePartProps>
