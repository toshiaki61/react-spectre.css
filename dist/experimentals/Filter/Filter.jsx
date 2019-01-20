import * as tslib_1 from "tslib";
import React, { Fragment } from 'react';
import { Card, CardHeader, CardSubtitle, CardTitle, Chip, } from '@components/index';
import { hasFilterChildren } from './util';
import FilterBody from './FilterBody';
import FilterItem from './FilterItem';
import FilterNav from './FilterNav';
import FilterTag from './FilterTag';
function renderFilter(p) {
    if (hasFilterChildren(p)) {
        return p.children;
    }
    var tags = p.tags, data = p.data, activeId = p.activeId, onChange = p.onChange;
    return (<Fragment>
      {Object.keys(tags).map(function (key, i) {
        var handleChange = 
        // useCallback(
        function (e) { return onChange(e, key); };
        // ,[key])
        var checked = activeId ? activeId === key : i === 0;
        return (<FilterTag key={key + "_input"} id={key} checked={checked} onChange={handleChange}/>);
    })}

      <FilterNav>
        {Object.keys(tags).map(function (key) { return (<Chip key={key + "_nav"} htmlFor={key}>
            {tags[key]}
          </Chip>); })}
      </FilterNav>
      <FilterBody>
        {data &&
        data.map(function (_a, i) {
            var tag = _a.tag, title = _a.title, subtitle = _a.subtitle, style = _a.style;
            var key = "card_" + i;
            return (<FilterItem key={key} data-tag={tag} style={{ padding: '0.4rem' }}>
                <Card style={tslib_1.__assign({}, style, { marginBottom: '0.4rem' })}>
                  <CardHeader>
                    <CardTitle className="text-bold">{title}</CardTitle>
                    <CardSubtitle className="text-gray">
                      {subtitle}
                    </CardSubtitle>
                  </CardHeader>
                </Card>
              </FilterItem>);
        })}
      </FilterBody>
    </Fragment>);
}
var Filter = function (p) { return (<div className="filter">{renderFilter(p)}</div>); };
export default Filter;
//# sourceMappingURL=Filter.jsx.map