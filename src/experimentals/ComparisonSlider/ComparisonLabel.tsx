import React, {FC} from 'react'

import {ComparisonLabelProps} from './interfaces'

const ComparisonLabel: FC<ComparisonLabelProps> = ({children}) => (
  <div className="comparison-label">{children}</div>
)

export default ComparisonLabel
