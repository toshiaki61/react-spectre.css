import * as React from 'react'

import {StyleProps} from '../../interfaces'
import {MenuItemProps} from '../Menu'

export interface AccordionAttrProps extends Partial<StyleProps> {
  menus: AccordionItemAttrProps[]
}
export interface AccordionChildrenProps extends Partial<StyleProps> {
  children: Array<React.ReactElement<AccordionItemChildrenProps>>
}
export type AccordionProps = AccordionAttrProps | AccordionChildrenProps

export interface AccordionItemBaseProps {
  id: string
  header: React.ReactNode
  exclusive?: boolean
  useIcon?: boolean
}
export interface AccordionItemAttrProps
  extends AccordionItemBaseProps,
    Partial<StyleProps> {
  contents: MenuItemProps[]
}
export interface AccordionItemChildrenProps
  extends AccordionItemBaseProps,
    Partial<StyleProps> {
  children: React.ReactElement<AccordionItemProps>
}

export type AccordionItemProps =
  | AccordionItemAttrProps
  | AccordionItemChildrenProps
