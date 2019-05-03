import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Column,
  ColumnOffsetType,
  Columns,
  ColumnSizeType,
} from '../../../src/index'

const columnSizeTypes: OptionalKeyMap<ColumnSizeType> = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  'No Value': '',
}
const columnOffsetTypes: OptionalKeyMap<ColumnOffsetType> = {
  mx: 'mx',
  ml: 'ml',
  mr: 'mr',
  'No Value': '',
}

const component = () => {
  return (
    <Columns
      gapless={boolean('gapless', false)}
      oneline={boolean('oneline', false)}
      className={text('classNameColumns', '')}
    >
      <Column
        className={text('className-c-1', 'bg-gray')}
        xs={optionalSelect('xs-c-1', columnSizeTypes, '')}
        sm={optionalSelect('sm-c-1', columnSizeTypes, '')}
        md={optionalSelect('md-c-1', columnSizeTypes, '')}
        lg={optionalSelect('lg-c-1', columnSizeTypes, '')}
        xl={optionalSelect('xl-c-1', columnSizeTypes, '')}
        size={optionalSelect('size-c-1', columnSizeTypes, '')}
        offset={optionalSelect('offset-c-1', columnOffsetTypes, '')}
        autoWidth={boolean('autoWidth-c-1', false)}
        autoWidthXl={boolean('autoWidthXl-c-1', false)}
        autoWidthLg={boolean('autoWidthLg-c-1', false)}
        autoWidthMd={boolean('autoWidthMd-c-1', false)}
        autoWidthSm={boolean('autoWidthSm-c-1', false)}
        autoWidthXs={boolean('autoWidthXs-c-1', false)}
      >
        c-1
      </Column>
      <Column
        className={text('className-c-2', '')}
        xs={optionalSelect('xs-c-2', columnSizeTypes, '')}
        sm={optionalSelect('sm-c-2', columnSizeTypes, '')}
        md={optionalSelect('md-c-2', columnSizeTypes, '')}
        lg={optionalSelect('lg-c-2', columnSizeTypes, '')}
        xl={optionalSelect('xl-c-2', columnSizeTypes, '')}
        size={optionalSelect('size-c-2', columnSizeTypes, '')}
        offset={optionalSelect('offset-c-2', columnOffsetTypes, '')}
        autoWidth={boolean('autoWidth-c-2', false)}
        autoWidthXl={boolean('autoWidthXl-c-2', false)}
        autoWidthLg={boolean('autoWidthLg-c-2', false)}
        autoWidthMd={boolean('autoWidthMd-c-2', false)}
        autoWidthSm={boolean('autoWidthSm-c-2', false)}
        autoWidthXs={boolean('autoWidthXs-c-2', false)}
      >
        c-2
      </Column>
    </Columns>
  )
}

export default component
