import * as React from 'react'

import {ComparisonLabelProps} from './interfaces'

const ComparisonLabel: React.FC<ComparisonLabelProps> = ({children}) => (
  <div className="comparison-label">{children}</div>
)

export default ComparisonLabel
