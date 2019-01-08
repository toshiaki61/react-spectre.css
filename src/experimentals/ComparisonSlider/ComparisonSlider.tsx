import React, {FC, Fragment} from 'react'

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
    <Fragment>
      <ComparisonBefore>
        <ComparisonImage {...before} />
        <ComparisonLabel>Before</ComparisonLabel>
      </ComparisonBefore>
      <ComparisonAfter>
        <ComparisonImage {...after} />
        <ComparisonLabel>After</ComparisonLabel>
        <ComparisonResizer />
      </ComparisonAfter>
    </Fragment>
  )
}
const ComparisonSlider: FC<ComparisonSliderProps> = p => (
  <div className="comparison-slider">{renderComparisonSlider(p)}</div>
)
export default ComparisonSlider
