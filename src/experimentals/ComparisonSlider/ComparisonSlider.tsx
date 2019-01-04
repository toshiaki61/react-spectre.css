import React, {Fragment, ReactElement} from 'react'

import {ComparisonSliderProps} from './interfaces'

import ComparisonAfter from './ComparisonAfter'
import ComparisonBefore from './ComparisonBefore'
import ComparisonImage from './ComparisonImage'
import ComparisonLabel from './ComparisonLabel'
import ComparisonResizer from './ComparisonResizer'

const ComparisonSlider = ({
  children,
  before,
  after,
}: ComparisonSliderProps): ReactElement<ComparisonSliderProps> => (
  <div className="comparison-slider">
    {children
      ? children
      : before &&
        after && (
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
        )}
  </div>
)
export default ComparisonSlider
