import React, {FC} from 'react'

import {ComparisonBeforeProps} from './interfaces'

const ComparisonBefore: FC<ComparisonBeforeProps> = ({children}) => (
  <figure className="comparison-before">{children}</figure>
)

export default ComparisonBefore
