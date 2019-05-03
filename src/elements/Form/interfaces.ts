import * as React from 'react'

import {IconType} from '../Icon'

export interface FormProps {
  children: React.ReactNode
  className?: string
  horizontal?: boolean
}

export type FormStateType = 'success' | 'error'

export interface FormGroupProps {
  children: React.ReactNode | React.ReactNodeArray
  className?: string
  color?: FormStateType
}

export interface FormLabelProps {
  children: React.ReactNode
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

export interface FormInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  formSize?: FormSizeType
  state?: FormFieldStateType
}

export interface FormTextareaProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  formSize?: FormSizeType
}

export interface FormSelectProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  children: React.ReactNode
  formSize?: FormSizeType
}
export interface FormLabeledProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: React.ReactNode
  inline?: boolean
  formSize?: FormSizeType
}
export interface FormInputHintProps {
  children: React.ReactNode
}
export type InputIconPositionType = 'right' | 'left'

export interface HasIconProps {
  children: React.ReactNode
  position: InputIconPositionType
}

export interface InputGroupProps {
  children: React.ReactNode
}
export interface InputGroupAddonProps {
  children: React.ReactNode
  formSize?: FormSizeType
}
