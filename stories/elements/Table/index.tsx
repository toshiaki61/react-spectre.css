import React, {ReactNode} from 'react'

import cx from 'classnames'

import {action} from '@storybook/addon-actions'
import {boolean, number, select} from '@storybook/addon-knobs'

import {Table, TableCellDecorator, TableData} from '@elements/Table'

interface TooltipProps {
  children: ReactNode
  text: string
  position?: 'top' | 'right' | 'left' | 'bottom'
}
const Tooltip = ({children, text, position}: TooltipProps) => (
  <div
    className={cx('tooltip', {
      'tooltip-right': position === 'right',
      'tooltip-left': position === 'left',
      'tooltip-bottom': position === 'bottom',
    })}
    data-tooltip={text}
  >
    {children}
  </div>
)
const jobTitles = [
  'Motel Maid',
  'Twister Operator',
  'Butane Compressor Operator',
  'Optomechanical Technician',
  'Automobile Body Repair Supervisor',
  'Underground Bolting Machine Operator',
  'Funeral Arranger',
  'Cellist',
  'Labor Economist',
  'Cast-Iron Drain Pipe Layer',
]

const names = [
  'Roselle',
  'Jena',
  'Monnie',
  'Ena',
  'Tonja',
  'Christie',
  'Gretta',
  'Clora',
  'Sona',
  'Magan',
  'Sybil',
  'Elly',
  'Shakira',
  'Carri',
  'Piedad',
  'Valorie',
  'Melinda',
  'Tracie',
  'Brynn',
  'Flossie',
]

// Column options

const columnsSimple = ['id', 'name', 'title', 'age', 'weight', 'height']

const columnsCustom = [
  {key: 'id', children: 'ID'},
  {key: 'name', children: 'First Name'},
  {key: 'title', children: 'Job Title'},
  {key: 'age', children: 'Age (years)'},
  {key: 'weight', children: 'Weight (pounds)'},
  {key: 'height', children: 'Height'},
]
function isNumber(item: any): item is number {
  return typeof item === 'number'
}
function processWeight(cellData: any) {
  if (isNumber(cellData)) {
    return cellData < 200
      ? `↓ ${cellData}`
      : cellData === 200
      ? cellData
      : `↑ ${cellData}`
  }
  return cellData
}
const weightCellDecorator: TableCellDecorator = (cellData, key) => (
  <TableData key={key}>{processWeight(cellData)}</TableData>
)

const heightCellDecorator: TableCellDecorator = (cellData, key) => (
  <TableData key={key}>{cellData ? cellData : 'n/a'}</TableData>
)

const columnsAdvanced = [
  {key: 'id', children: 'ID'},
  {
    key: 'name',
    children: (
      <Tooltip position="bottom" text="Uses a custom click handler">
        First Name <i className="fa fa-user -m-r-2" />
      </Tooltip>
    ),
    disableSorting: true,
    headingProps: {
      onClick: action('column_heading_clicked'),
    },
  },
  {
    key: 'title',
    children: (
      <Tooltip position="bottom" text="Uses a custom click handler">
        Job Title (sorted by length) <i className="fa fa-info-circle -m-r-2" />
      </Tooltip>
    ),
    headingProps: {
      onClick: action('column_heading_clicked'),
    },
    sortCompareAsc: (a, b) => a.title.length - b.title.length,
    sortCompareDesc: (a, b) => b.title.length - a.title.length,
  },
  {key: 'age', children: 'Age (years)'},
  {
    key: 'weight',
    children: 'Weight (pounds)',
    dataCellDecorator: weightCellDecorator,
  },
  {
    key: 'height',
    children: 'Height',
    headingProps: {
      style: {
        width: '120px',
      },
      className: 'custom-class',
    },
    dataCellDecorator: heightCellDecorator,
  },
]
// Column select options

const columnOptions = {
  simple: 'simple',
  custom: 'custom',
  advanced: 'advanced',
}

const columnConfig = {
  simple: columnsSimple,
  custom: columnsCustom,
  advanced: columnsAdvanced,
}
// Sample data

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

const createPerson = () => ({
  name: names[getRandomInt(0, names.length - 1)],
  title: jobTitles[getRandomInt(0, jobTitles.length - 1)],
  age: getRandomInt(18, 70),
  weight: getRandomInt(110, 250),
  height:
    Math.random() < 0.9
      ? `${getRandomInt(4, 7)}'${getRandomInt(1, 11)}"`
      : null,
})

const generateData = (amount: number) =>
  Array(amount)
    .fill(null)
    .map((_, i) => ({
      id: i,
      ...createPerson(),
    }))
const component = () => {
  const numOfRows = number('Rows', 10, {
    range: true,
    min: 1,
    max: 100,
    step: 1,
  })
  return (
    <Table
      columns={columnConfig[select('Column Config', columnOptions, 'simple')]}
      data={generateData(numOfRows)}
      hover={boolean('hover', true)}
      striped={boolean('striped', true)}
      scroll={boolean('scroll', true)}
      onRowClick={
        boolean('onRowClick', false) ? action('row_clicked') : undefined
      }
    />
  )
}
export default component
