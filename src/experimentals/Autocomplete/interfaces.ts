import * as React from 'react'

import {MouseEventIdHandler} from '../../interfaces'

export interface SuggestProps {
  id: string
  name: string
  img?: string
  initial?: string
}

export type SuggestPropKeys = keyof SuggestProps
export type SuggestValues = {[P in SuggestPropKeys]: SuggestProps[P]}

export interface AutocompleteProps {
  placeholder?: string
  active?: boolean
  selected: SuggestProps[]
  suggests: SuggestProps[]
  input: string
  loading?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
  onClearClick: MouseEventIdHandler
  onSelected: MouseEventIdHandler
}

export interface FormAutocompleteProps {
  children: React.ReactNode
  className?: string
  onFocus: React.FocusEventHandler
  onBlur: React.FocusEventHandler
}

export interface FormAutocompleteInputProps {
  children: React.ReactNode
  className?: string
  active?: boolean
}
