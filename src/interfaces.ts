import {CSSProperties, MouseEvent, ReactNode} from 'react'

export const LinkHash = '#'

export interface StyleProps {
  className: string
  style: CSSProperties
}

export interface BasePartProps extends Partial<StyleProps> {
  children: ReactNode
}

export type MouseEventIdHandler = (e: MouseEvent<any>, id: string) => void
