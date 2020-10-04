import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {text} from '@storybook/addon-knobs'

import {Breadcrumb, BreadcrumbItem} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  return (
    <React.Fragment>
      <Breadcrumb>
        <BreadcrumbItem
          link={text('link1', '')}
          onClick={action('first_clicked')}
        >
          First
        </BreadcrumbItem>
        <BreadcrumbItem
          link={text('link2', '')}
          onClick={action('second_clicked')}
        >
          Second
        </BreadcrumbItem>
        <BreadcrumbItem
          link={text('link3', '')}
          onClick={action('third_clicked')}
        >
          Third
        </BreadcrumbItem>
      </Breadcrumb>
      items
      <Breadcrumb items={[{id: 'first', children: 'items_first'}]} />
    </React.Fragment>
  )
}

export default withLiveEditAndInfo(component, {
  Breadcrumb,
  BreadcrumbItem,
})
