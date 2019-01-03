import {ReactNode, ReactNodeArray} from 'react'

import {IconType} from '@elements/Icon'

export interface FormProps {
  children: ReactNode
  className?: string
  horizontal?: boolean
}

export type FormState = 'success' | 'error'

export interface FormGroupProps {
  children: ReactNode | ReactNodeArray
  className?: string
  color?: FormState
}

export interface FormLabelProps {
  children: ReactNode
  className?: string
  htmlFor?: string
}

export interface FormIconProps {
  iconType?: IconType
  loading?: boolean
}

export type FormInputType =
  | 'text'
  | 'radio'
  | 'checkbox'
  | 'email'
  | 'url'
  | 'search'
  | 'tel'
  | 'password'
  | 'number'
  | 'date'
  | 'color'
  | 'file'

export type FormSize = 'sm' | 'lg'

export type FormFieldState = FormState

export interface FormInputProps {
  type: FormInputType
  size?: FormSize
  state?: FormFieldState
  placeholder?: string
}

export interface FormTextareaProps {
  size?: FormSize
}

export interface FormSelectProps {
  children: ReactNode
  size?: FormSize
}
export interface FormLabeledProps {
  label?: ReactNode
  inline?: boolean
  size?: FormSize
}
export interface FormInputHintProps {
  children: ReactNode
}
export type InputIconPosition = 'right' | 'left'

export interface HasIconProps {
  children: ReactNode
  position: InputIconPosition
}

export interface InputGroupProps {
  children: ReactNode
}
export interface InputGroupAddonProps {
  children: ReactNode
  size?: FormSize
}
