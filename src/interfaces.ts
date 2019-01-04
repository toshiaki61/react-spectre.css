import {CSSProperties, MouseEvent, ReactNode} from 'react'

export const LinkHash = '#'

export interface BasePartProps {
  children: ReactNode
  className: string
  style: CSSProperties
}

export type MouseEventIdHandler = (e: MouseEvent<any>, id: string) => void
