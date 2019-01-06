import React, {SFC} from 'react'

import {ComparisonAfterProps} from './interfaces'

const ComparisonAfter: SFC<ComparisonAfterProps> = ({children}) => (
  <figure className="comparison-after">{children}</figure>
)

export default ComparisonAfter
