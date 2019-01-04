import React, {ReactElement} from 'react'

import cx from 'classnames'

import {ComparisonImageProps} from './interfaces'

const ComparisonImage = ({
  src,
  alt,
  className,
  ...props
}: ComparisonImageProps): ReactElement<ComparisonImageProps> => (
  <img src={src} className={cx('rounded', className)} alt={alt} {...props} />
)
ComparisonImage.defaultProps = {
  alt: '',
  className: '',
}

export default ComparisonImage
