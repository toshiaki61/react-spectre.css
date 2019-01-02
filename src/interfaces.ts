import {CSSProperties, ReactNode} from 'react'

export const LinkHash = '#'

export interface BasePartProps {
  children: ReactNode
  className: string
  style: CSSProperties
}
