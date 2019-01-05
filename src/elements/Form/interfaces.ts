import {ChangeEventHandler, ReactNode, ReactNodeArray} from 'react'

import {IconType} from '@elements/Icon'

export interface FormProps {
  children: ReactNode
  className?: string
  horizontal?: boolean
}

export type FormStateType = 'success' | 'error'

export interface FormGroupProps {
  children: ReactNode | ReactNodeArray
  className?: string
  color?: FormStateType
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

export type FormSizeType = 'sm' | 'lg'

export type FormFieldStateType = FormStateType

export interface FormInputProps {
  type: FormInputType
  size?: FormSizeType
  state?: FormFieldStateType
  placeholder?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export interface FormTextareaProps {
  size?: FormSizeType
}

export interface FormSelectProps {
  children: ReactNode
  size?: FormSizeType
}
export interface FormLabeledProps {
  label?: ReactNode
  inline?: boolean
  size?: FormSizeType
}
export interface FormInputHintProps {
  children: ReactNode
}
export type InputIconPositionType = 'right' | 'left'

export interface HasIconProps {
  children: ReactNode
  position: InputIconPositionType
}

export interface InputGroupProps {
  children: ReactNode
}
export interface InputGroupAddonProps {
  children: ReactNode
  size?: FormSizeType
}
