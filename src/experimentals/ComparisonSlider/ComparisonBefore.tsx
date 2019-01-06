import React, {SFC} from 'react'

import {ComparisonBeforeProps} from './interfaces'

const ComparisonBefore: SFC<ComparisonBeforeProps> = ({children}) => (
  <figure className="comparison-before">{children}</figure>
)

export default ComparisonBefore
