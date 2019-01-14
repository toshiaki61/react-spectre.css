import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {Dropdown, Menu, MenuItem} from '../../../src/index'

// export interface DropdownBaseProps extends Partial<StyleProps> {
//   active?: boolean
//   right?: boolean
//   initialValue?: string
//   onClick: MouseEventHandler
//   onBlur: FocusEventHandler
//   onMenuClick?: (e: MouseEvent<any>, id: string) => void
// }

// export interface DropdownAttrProps extends DropdownBaseProps {
//   contents: MenuItemProps[]
// }

// export interface DropdownChildrenProps extends DropdownBaseProps {
//   children: ReactNode
// }

// export type DropdownProps = DropdownAttrProps | DropdownChildrenProps

const component = () => {
  return (
    <Dropdown
      onClick={action('clicked')}
      onBlur={action('blured')}
      initialValue={'a'}
    >
      <Menu>
        <MenuItem link="#" content={text('menu-1', 'menu-1')} />
      </Menu>
    </Dropdown>
  )
}

export default component
