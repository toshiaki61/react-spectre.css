import React, { Component } from 'react';

import Filter from '../experimentals/Filter';

type FilterProps = {
  tags: {
    [key: strihg]: string,
  },
  data: Array<{
    tag: string,
    title: string,
    subtitle: string,
  }>,
};
type FilterStates = {
  active: string,
};
class FilterExample extends Component<FilterProps, FilterStates> {
  static defaultProps = {
    tags: {
      'tag-all': 'All',
      'tag-action': 'Action',
      'tag-roleplaying': 'Roleplaying',
      'tag-shooter': 'Shooter',
      'tag-sports': 'Sports',
    },
    data: [
      { tag: 'tag-roleplaying', title: 'Fallout 4', subtitle: 'Roleplaying' },
      { tag: 'tag-shooter', title: 'Halo 5', subtitle: 'Shooter' },
      { tag: 'tag-action', title: 'Quantum Break', subtitle: 'Action' },
      { tag: 'tag-sports', title: 'Forza Horizon 3', subtitle: 'Sports' },
      { tag: 'tag-roleplaying', title: 'Final Fantasy XV', subtitle: 'Roleplaying' },
      { tag: 'tag-sports', title: 'NBA 2K17', subtitle: 'Sports' },
      { tag: 'tag-shooter', title: 'Battlefield 1', subtitle: 'Shooter' },
      { tag: 'tag-action', title: 'GTA V', subtitle: 'Action' },
      { tag: 'tag-sports', title: 'FIFA 17', subtitle: 'Sports' },
      { tag: 'tag-shooter', title: 'Overwatch', subtitle: 'Shooter' },
      { tag: 'tag-shooter', title: 'Titanfall 2', subtitle: 'Shooter' },
      { tag: 'tag-shooter', title: 'Gears of Wars 4', subtitle: 'Shooter' },
    ],
  };

  state = {
    active: 'tag-all',
  };
  onChange = (e, id) => this.setState({ active: id });
  render() {
    const { tags, data } = this.props;
    const { active } = this.state;
    return (
      <Filter tags={tags} data={data} active={active} onChange={this.onChange} />
    );
  }
}

export default FilterExample;
