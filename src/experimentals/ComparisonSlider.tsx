import classnames from 'classnames'
import React, {CSSProperties, ReactElement} from 'react'

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
export interface IComparisonSliderProps {
  before: ImageProps
  after: ImageProps
}
const ComparisonSlider = ({
  before,
  after,
}: IComparisonSliderProps): ReactElement<IComparisonSliderProps> => (
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
