import React, {ChangeEvent, Component} from 'react'

import {Filter} from 'experimentals/Filter'

interface FilterProps {
  tags: {
    key: string
  }
  data: Array<{
    tag: string
    title: string
    subtitle: string
  }>
}

interface FilterExampleState {
  active: string
}
class FilterExample extends Component<FilterProps, FilterExampleState> {
  public static defaultProps = {
    tags: {
      'tag-0': 'All',
      'tag-1': 'Action',
      'tag-2': 'Roleplaying',
      'tag-3': 'Shooter',
      'tag-4': 'Sports',
    },
    data: [
      {tag: 'tag-2', title: 'Fallout 4', subtitle: 'Roleplaying'},
      {tag: 'tag-3', title: 'Halo 5', subtitle: 'Shooter'},
      {tag: 'tag-1', title: 'Quantum Break', subtitle: 'Action'},
      {tag: 'tag-4', title: 'Forza Horizon 3', subtitle: 'Sports'},
      {tag: 'tag-2', title: 'Final Fantasy XV', subtitle: 'Roleplaying'},
      {tag: 'tag-4', title: 'NBA 2K17', subtitle: 'Sports'},
      {tag: 'tag-3', title: 'Battlefield 1', subtitle: 'Shooter'},
      {tag: 'tag-1', title: 'GTA V', subtitle: 'Action'},
      {tag: 'tag-4', title: 'FIFA 17', subtitle: 'Sports'},
      {tag: 'tag-3', title: 'Overwatch', subtitle: 'Shooter'},
      {tag: 'tag-3', title: 'Titanfall 2', subtitle: 'Shooter'},
      {tag: 'tag-3', title: 'Gears of Wars 4', subtitle: 'Shooter'},
    ],
  }

  public state = {
    active: 'tag-0',
  }

  public render() {
    const {tags, data} = this.props
    const {active} = this.state
    return (
      <Filter
        tags={tags}
        data={data}
        activeId={active}
        onChange={this.onChange}
      />
    )
  }

  private onChange = (e: ChangeEvent<any>, id: string) =>
    this.setState({active: id})
}
export default FilterExample
