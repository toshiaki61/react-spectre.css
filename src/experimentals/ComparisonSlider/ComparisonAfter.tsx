import React, {FC} from 'react'

import {ComparisonAfterProps} from './interfaces'

const ComparisonAfter: FC<ComparisonAfterProps> = ({children}) => (
  <figure className="comparison-after">{children}</figure>
)

export default ComparisonAfter
