import * as React from 'react'

import {ComparisonBeforeProps} from './interfaces'

const ComparisonBefore: React.FC<ComparisonBeforeProps> = ({children}) => (
  <figure className="comparison-before">{children}</figure>
)

export default ComparisonBefore
