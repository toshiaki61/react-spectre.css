import React, {FC} from 'react'

import {attr} from 'utilities/attr'

import {LoadingProps} from './interfaces'

const Loading: FC<LoadingProps> = ({large, className, ...rest}) => (
  <div
    {...attr({loading: true, loadingSize: large ? 'lg' : undefined, className})}
    {...rest}
  />
)
Loading.defaultProps = {
  large: false,
  className: '',
}

export default Loading
