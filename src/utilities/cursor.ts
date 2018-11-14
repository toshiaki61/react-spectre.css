import classnames from 'classnames'

export interface ICursorParameters {
  hand?: boolean
  move?: boolean
  zoomIn?: boolean
  zoomOut?: boolean
  notAllowed?: boolean
  auto?: boolean
}

export default function cursor(
  {hand, move, zoomIn, zoomOut, notAllowed, auto}: ICursorParameters,
  className: string
): string {
  return classnames(
    {
      'c-hand': hand,
      'c-move': move,
      'c-zoom-in': zoomIn,
      'c-zoom-out': zoomOut,
      'c-not-allowed': notAllowed,
      'c-auto': auto,
    },
    className
  )
}
