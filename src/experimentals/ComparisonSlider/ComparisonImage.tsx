import React, {SFC} from 'react'

import cx from 'classnames'

import {ComparisonImageProps} from './interfaces'

const ComparisonImage: SFC<ComparisonImageProps> = ({
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
