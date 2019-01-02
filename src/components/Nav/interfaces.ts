import {MouseEvent, ReactNode} from 'react'

export interface NavItemProps {
  id: string
  name: string
  onClick?: (e: MouseEvent<any>, id: string) => void
  active?: boolean
  items?: NavItemProps[]
  className?: string
}

export interface NavProps {
  children?: ReactNode
  items?: NavItemProps[]
  active?: string
  onClick?: (e: MouseEvent<any>, id: string) => void
  className?: string
}
