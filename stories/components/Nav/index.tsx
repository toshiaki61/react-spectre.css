import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Nav} from '../../../src'

// export interface NavItemProps {
//   id: string
//   name: string
//   onClick?: (e: MouseEvent<any>, id: string) => void
//   active?: boolean
//   items?: NavItemProps[]
//   className?: string
// }

// export interface NavAttrProps extends Partial<StyleProps> {
//   items: NavItemProps[]
//   activeId?: string
//   onClick?: (e: MouseEvent<any>, id: string) => void
// }

// export interface NavChildrenProps extends Partial<StyleProps> {
//   children: ReactNode
// }

// export type NavProps = NavAttrProps | NavChildrenProps

{
  /* <ul class="nav">
  <li class="nav-item">
    <a href="#">Elements</a>
  </li>
  <li class="nav-item active">
    <a href="#">Layout</a>
    <ul class="nav">
      <li class="nav-item">
        <a href="#">Flexbox grid</a>
      </li>
      <li class="nav-item">
        <a href="#">Responsive</a>
      </li>
      <li class="nav-item">
        <a href="#">Navbar</a>
      </li>
      <li class="nav-item">
        <a href="#">Empty states</a>
      </li>
    </ul>
  </li>
  <li class="nav-item">
    <a href="#">Components</a>
  </li>
  <li class="nav-item">
    <a href="#">Utilities</a>
  </li>
</ul> */
}
const component = () => {
  return (
    <Nav
      activeId={text('activeId', 'nav-2')}
      onClick={action('clicked')}
      items={[
        {
          id: 'nav-1',
          name: 'Elements',
        },
        {
          id: 'nav-2',
          name: 'Layout',
          items: [
            {id: 'nav-2-1', name: 'Flexbox grid'},
            {id: 'nav-2-2', name: 'Responsive'},
            {id: 'nav-2-3', name: 'Navbar'},
            {id: 'nav-2-4', name: 'Empty states'},
          ],
        },
        {id: 'nav-3', name: 'Components'},
        {id: 'nav-4', name: 'Utilities'},
      ]}
    />
  )
}

export default component
