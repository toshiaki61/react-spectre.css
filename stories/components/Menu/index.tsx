import * as React from 'react'

import {boolean, number, text} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'

import {Menu, MenuItem, MenuItemProps} from '../../../src'

const generateData = (amount: number) =>
  Array(amount)
    .fill(null)
    .map<MenuItemProps>((_, i) => ({
      id: `content-${i}`,
      content: `content-${i}`,
    }))

const component = () => {
  const numOfMenus = number('Menus', 5, {
    range: true,
    min: 1,
    max: 10,
    step: 1,
  })
  return (
    <Menu
      onClick={action('menu_clicked')}
      nav={boolean('nav', false)}
      // contents={generateData(numOfMenus)}
    >
      {generateData(numOfMenus).map((datum, i) => (
        <MenuItem
          key={datum.id}
          link={text('link', '')}
          content={text('content', 'menu')}
          divider={text('divider', '')}
          active={boolean('active', false)}
          badge={text('badge', '')}
        />
      ))}
    </Menu>
  )
}

export default component
