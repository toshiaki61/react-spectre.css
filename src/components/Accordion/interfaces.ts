import {CSSProperties, ReactNode} from 'react'

import {MenuItemProps} from '../Menu'

export interface AccordionProps {
  menus?: AccordionItemProps[]
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface AccordionItemProps {
  id: string
  contents?: MenuItemProps[]
  className?: string
  exclusive?: boolean
  useIcon?: boolean
  header: ReactNode
  children?: ReactNode
}
