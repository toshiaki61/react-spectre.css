import {ChangeEvent, ChangeEventHandler, ReactNode} from 'react'

import {BasePartProps} from '../../interfaces'

export type ChangeEventIdHandler = (
  e: ChangeEvent<HTMLInputElement>,
  id: string
) => void

export interface CarouselItemProps {
  src: string
  alt: string
}

export interface CarouselProps {
  children?: ReactNode
  slides?: CarouselItemProps[]
  active?: string
  onChange: ChangeEventIdHandler
}

export interface CarouselLocatorProps {
  id: string
  checked: boolean
  onChange: ChangeEventHandler
}
export interface CarouselItemPaging {
  prev: number
  next: number
}
export type CarouselContainerProps = Partial<BasePartProps>
export type CarouselNavProps = Partial<BasePartProps>
export type CarouselNavItemProps = Partial<BasePartProps> & {id: string}
