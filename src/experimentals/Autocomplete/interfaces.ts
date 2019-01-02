import {ChangeEvent, FocusEvent, MouseEvent} from 'react'

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
  onChange: (e: ChangeEvent<any>) => void
  onFocus: (e: FocusEvent<any>) => void
  onBlur: (e: FocusEvent<any>) => void
  onClearClick: (e: MouseEvent<any>, id: string) => void
  onSelected: (e: MouseEvent<any>, id: string) => void
}
