import React from 'react'

import {boolean, number, text} from '@storybook/addon-knobs'

import {Accordion, AccordionItem} from '@components/Accordion'
import {Menu, MenuItemProps} from '@components/Menu'

const generateData = (amount: number) =>
  Array(amount)
    .fill(null)
    .map<MenuItemProps>((_, i) => ({
      id: `content-${i}`,
      content: `content-${i}`,
    }))

const generateItems = (amount: number) =>
  Array(amount)
    .fill(null)
    .map((_, i) => ({id: `item-${i}`}))

const component = () => {
  const numOfItems = number('Items', 3, {
    range: true,
    min: 1,
    max: 5,
    step: 1,
  })
  const numOfMenus = number('Menus', 5, {
    range: true,
    min: 1,
    max: 10,
    step: 1,
  })
  return (
    <Accordion>
      {generateItems(numOfItems).map(item => (
        <AccordionItem
          key={item.id}
          header={text('Header', 'Header')}
          useIcon={boolean('useIcon', true)}
          exclusive={boolean('exclusive', false)}
        >
          <Menu nav contents={generateData(numOfMenus)} />
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default component
