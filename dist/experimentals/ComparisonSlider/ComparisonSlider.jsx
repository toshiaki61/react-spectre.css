import React, { Fragment } from 'react';
import { hasComparisonSliderChildren } from './util';
import ComparisonAfter from './ComparisonAfter';
import ComparisonBefore from './ComparisonBefore';
import ComparisonImage from './ComparisonImage';
import ComparisonLabel from './ComparisonLabel';
import ComparisonResizer from './ComparisonResizer';
function renderComparisonSlider(p) {
    if (hasComparisonSliderChildren(p)) {
        return p.children;
    }
    var before = p.before, after = p.after;
    return (<Fragment>
      <ComparisonBefore>
        <ComparisonImage {...before}/>
        <ComparisonLabel>Before</ComparisonLabel>
      </ComparisonBefore>
      <ComparisonAfter>
        <ComparisonImage {...after}/>
        <ComparisonLabel>After</ComparisonLabel>
        <ComparisonResizer />
      </ComparisonAfter>
    </Fragment>);
}
var ComparisonSlider = function (p) { return (<div className="comparison-slider">{renderComparisonSlider(p)}</div>); };
export default ComparisonSlider;
//# sourceMappingURL=ComparisonSlider.jsx.map