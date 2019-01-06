import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Column,
  ColumnOffsetType,
  Columns,
  ColumnSizeType,
  Container,
  ContainerGridSizeType,
} from '../../../src/index'

const containerGridSizeTypes: OptionalKeyMap<ContainerGridSizeType> = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  'No Value': '',
}

const component = () => {
  return (
    <Container
      size={optionalSelect('size', containerGridSizeTypes, '')}
      className={text('className', '')}
      style={object('style', {})}
    >
      <Columns>
        <Column>col-1</Column>
        <Column>col-2</Column>
        <Column>col-3</Column>
        <Column>col-4</Column>
        <Column>col-5</Column>
        <Column>col-6</Column>
        <Column>col-7</Column>
        <Column>col-8</Column>
        <Column>col-9</Column>
        <Column>col-10</Column>
        <Column>col-11</Column>
        <Column>col-12</Column>
        <Column>col-13</Column>
        <Column>col-14</Column>
      </Columns>
    </Container>
  )
}

export default component
