import React, {ReactElement, SFC} from 'react'

import {attr} from '@utils/attr'

import {LoadingProps} from './interfaces'

const Loading: SFC<LoadingProps> = ({large, className, ...rest}) => (
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
