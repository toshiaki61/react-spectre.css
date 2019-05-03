import * as React from 'react'

import {ComparisonAfterProps} from './interfaces'

const ComparisonAfter: React.FC<ComparisonAfterProps> = ({children}) => (
  <figure className="comparison-after">{children}</figure>
)

export default ComparisonAfter
