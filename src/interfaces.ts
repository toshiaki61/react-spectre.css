import * as React from 'react'

export const LinkHash = '#'

export interface StyleProps {
  className: string
  style: React.CSSProperties
}

export interface BasePartProps extends Partial<StyleProps> {
  children: React.ReactNode
}

export type MouseEventIdHandler = (e: React.MouseEvent<any>, id: string) => void
