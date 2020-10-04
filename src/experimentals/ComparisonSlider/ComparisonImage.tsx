import * as React from 'react'

import cx from 'clsx'

import {ComparisonImageProps} from './interfaces'

const ComparisonImage: React.FC<ComparisonImageProps> = ({
  src,
  alt,
  className,
  ...props
}) => (
  <img src={src} className={cx('rounded', className)} alt={alt} {...props} />
)
ComparisonImage.defaultProps = {
  alt: '',
  className: '',
}

export default ComparisonImage
