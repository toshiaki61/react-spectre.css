import * as React from 'react'

import {attr} from '../attr'

import {LoadingProps} from './interfaces'

const Loading: React.FC<LoadingProps> = ({large, className, ...rest}) => (
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
