import React, {ReactElement} from 'react'

import {attr} from '@utils/attr'

import {LoadingProps} from './interfaces'

const Loading = ({
  large,
  className,
  ...rest
}: LoadingProps): ReactElement<LoadingProps> => (
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
