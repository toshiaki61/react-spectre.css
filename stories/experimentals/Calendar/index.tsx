import * as React from 'react'

import {eachDay, endOfWeek, format, startOfWeek} from 'date-fns'

import {action} from '@storybook/addon-actions'
import {boolean} from '@storybook/addon-knobs'

import {
  Calendar,
  CalendarOptions,
  Column,
  Columns,
  DateLike,
} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => {
  // const now = new Date()
  const current = new Date()
  const weekdays = eachDay(startOfWeek(current), endOfWeek(current)).reduce(
    (acc: string[], d) => {
      acc.push(format(d, 'ddd'))
      return acc
    },
    []
  )
  const formatDate = (target: DateLike) => format(target, 'D')
  const nav = {
    current: format(current, 'MMMM YYYY'),
    prev: {
      onClick: (e: React.MouseEvent<any>) => {
        e.preventDefault()
        action('prev_clicked')
      },
    },
    next: {
      onClick: (e: React.MouseEvent<any>) => {
        e.preventDefault()
        action('next_clicked')
      },
    },
  }
  const options: CalendarOptions = {
    data: [
      {date: '2019-01-19', tooltip: 'test', type: 'badge'},
      {date: current, tooltip: 'today', type: 'today'},
    ],
    range: [{start: '2019-01-01', end: '2019-01-05'}],
  }
  const lg = boolean('lg', false)
  return (
    <Columns>
      <Column size={lg ? 12 : 4}>
        <Calendar
          lg={lg}
          current={current}
          nav={nav}
          weekdays={weekdays}
          formatDate={formatDate}
          options={options}
          onDateClick={action('date_clicked')}
        />
      </Column>
    </Columns>
  )
}

export default withLiveEditAndInfo(component, {Calendar, Column, Columns})
