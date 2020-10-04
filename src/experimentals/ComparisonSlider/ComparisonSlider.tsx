import * as React from 'react'

import {ComparisonSliderProps} from './interfaces'
import {hasComparisonSliderChildren} from './util'

import ComparisonAfter from './ComparisonAfter'
import ComparisonBefore from './ComparisonBefore'
import ComparisonImage from './ComparisonImage'
import ComparisonLabel from './ComparisonLabel'
import ComparisonResizer from './ComparisonResizer'

function renderComparisonSlider(p: ComparisonSliderProps) {
  if (hasComparisonSliderChildren(p)) {
    return p.children
  }
  const {before, after} = p
  return (
    <React.Fragment>
      <ComparisonBefore>
        <ComparisonImage {...before} />
        <ComparisonLabel>Before</ComparisonLabel>
      </ComparisonBefore>
      <ComparisonAfter>
        <ComparisonImage {...after} />
        <ComparisonLabel>After</ComparisonLabel>
        <ComparisonResizer />
      </ComparisonAfter>
    </React.Fragment>
  )
}
const ComparisonSlider: React.FC<ComparisonSliderProps> = p => (
  <div className="comparison-slider">{renderComparisonSlider(p)}</div>
)
export default ComparisonSlider
