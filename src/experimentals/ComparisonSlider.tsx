import React, {ReactElement, CSSProperties} from 'react'
import classnames from 'classnames'

export interface ImageProps {
  src: string
  alt?: string
  className?: string
  style?: CSSProperties
}
const Image = ({
  src,
  alt,
  className,
  ...props
}: ImageProps): ReactElement<ImageProps> => (
  <img
    src={src}
    className={classnames('rounded', className)}
    alt={alt}
    {...props}
  />
)

Image.defaultProps = {
  alt: '',
  className: '',
}
export interface ComparisonSliderProps {
  before: ImageProps
  after: ImageProps
}
const ComparisonSlider = ({
  before,
  after,
}: ComparisonSliderProps): ReactElement<ComparisonSliderProps> => (
  <div className="comparison-slider">
    <figure className="comparison-before">
      <Image {...before} />
      <div className="comparison-label">Before</div>
    </figure>
    <figure className="comparison-after">
      <Image {...after} />
      <div className="comparison-label">After</div>
      <textarea className="comparison-resizer" readOnly />
    </figure>
  </div>
)
export default ComparisonSlider
