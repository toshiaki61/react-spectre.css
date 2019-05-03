import * as React from 'react'

import {BasePartProps} from '../../interfaces'

export type ChangeEventIdHandler = (
  e: React.ChangeEvent<HTMLInputElement>,
  id: string
) => void

export interface CarouselItemProps {
  src: string
  alt: string
}

export interface CarouselAttrProps {
  slides: CarouselItemProps[]
  activeId?: string
  onChange: ChangeEventIdHandler
}

export interface CarouselChildrenProps {
  children: React.ReactNode
}

export type CarouselProps = CarouselAttrProps | CarouselChildrenProps

export interface CarouselLocatorProps {
  id: string
  checked: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export interface CarouselItemPaging {
  prev: number
  next: number
}
export type CarouselContainerProps = Partial<BasePartProps>
export type CarouselNavProps = Partial<BasePartProps>
export type CarouselNavItemProps = Partial<BasePartProps> & {id: string}
