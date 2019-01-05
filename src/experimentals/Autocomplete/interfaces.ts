import {ChangeEventHandler, FocusEventHandler, ReactNode} from 'react'

import {MouseEventIdHandler} from '../../interfaces'

export interface SuggestProps {
  id: string
  name: string
  img?: string
  initial?: string
}

export interface AutocompleteProps {
  placeholder?: string
  active?: boolean
  selected: SuggestProps[]
  suggests: SuggestProps[]
  input: string
  loading?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  onFocus: FocusEventHandler
  onBlur: FocusEventHandler
  onClearClick: MouseEventIdHandler
  onSelected: MouseEventIdHandler
}

export interface FormAutocompleteProps {
  children: ReactNode
  className?: string
  onFocus: FocusEventHandler
  onBlur: FocusEventHandler
}

export interface FormAutocompleteInputProps {
  children: ReactNode
  className?: string
  active?: boolean
}
