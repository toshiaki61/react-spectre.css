import React from 'react'

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
    <Breadcrumb>
      <BreadcrumbItem id="first">First</BreadcrumbItem>
      <BreadcrumbItem id="second">Second</BreadcrumbItem>
      <BreadcrumbItem id="third">Third</BreadcrumbItem>
    </Breadcrumb>
  )
}

export default component
