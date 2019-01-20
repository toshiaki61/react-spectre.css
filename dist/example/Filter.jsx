import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Filter } from '@experimentals/Filter';
var FilterExample = /** @class */ (function (_super) {
    tslib_1.__extends(FilterExample, _super);
    function FilterExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            active: 'tag-0',
        };
        _this.onChange = function (e, id) {
            return _this.setState({ active: id });
        };
        return _this;
    }
    FilterExample.prototype.render = function () {
        var _a = this.props, tags = _a.tags, data = _a.data;
        var active = this.state.active;
        return (<Filter tags={tags} data={data} activeId={active} onChange={this.onChange}/>);
    };
    FilterExample.defaultProps = {
        tags: {
            'tag-0': 'All',
            'tag-1': 'Action',
            'tag-2': 'Roleplaying',
            'tag-3': 'Shooter',
            'tag-4': 'Sports',
        },
        data: [
            { tag: 'tag-2', title: 'Fallout 4', subtitle: 'Roleplaying' },
            { tag: 'tag-3', title: 'Halo 5', subtitle: 'Shooter' },
            { tag: 'tag-1', title: 'Quantum Break', subtitle: 'Action' },
            { tag: 'tag-4', title: 'Forza Horizon 3', subtitle: 'Sports' },
            { tag: 'tag-2', title: 'Final Fantasy XV', subtitle: 'Roleplaying' },
            { tag: 'tag-4', title: 'NBA 2K17', subtitle: 'Sports' },
            { tag: 'tag-3', title: 'Battlefield 1', subtitle: 'Shooter' },
            { tag: 'tag-1', title: 'GTA V', subtitle: 'Action' },
            { tag: 'tag-4', title: 'FIFA 17', subtitle: 'Sports' },
            { tag: 'tag-3', title: 'Overwatch', subtitle: 'Shooter' },
            { tag: 'tag-3', title: 'Titanfall 2', subtitle: 'Shooter' },
            { tag: 'tag-3', title: 'Gears of Wars 4', subtitle: 'Shooter' },
        ],
    };
    return FilterExample;
}(Component));
export default FilterExample;
//# sourceMappingURL=Filter.jsx.map