import React, {SFC} from 'react'

import {ComparisonLabelProps} from './interfaces'

const ComparisonLabel: SFC<ComparisonLabelProps> = ({children}) => (
  <div className="comparison-label">{children}</div>
)

export default ComparisonLabel
