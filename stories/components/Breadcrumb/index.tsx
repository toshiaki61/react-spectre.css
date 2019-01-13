import React, {Fragment} from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbItemProps,
} from '../../../src/index'

const component = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default component
