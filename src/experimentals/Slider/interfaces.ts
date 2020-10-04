import * as React from 'react'

export interface SliderProps {
  className?: string
  min?: number
  max?: number
  value?: number
  tooltip?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
