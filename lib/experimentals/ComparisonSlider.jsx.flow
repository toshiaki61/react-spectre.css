/* @flow */
import * as React from 'react';
import classnames from 'classnames';

export type ImageProps = {
  src: string,
  alt?: string,
  className?: string,
};
const Image = ({
  src, alt, className, ...props
}: ImageProps): React.Element<*> => (
  <img src={src} className={classnames('rounded', className)} alt={alt} {...props} />
);
Image.defaultProps = {
  alt: '',
  className: '',
};

export type ComparisonSliderProps = {
  before: ImageProps,
  after: ImageProps,
};
const ComparisonSlider = ({ before, after }: ComparisonSliderProps): React.Element<*> => (
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
);

export default ComparisonSlider;
