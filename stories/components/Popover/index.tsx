import React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {OptionalKeyMap, optionalSelect} from '../../utils'

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Popover,
  PopoverPositionType,
} from '../../../src'
const popoverPositionTypes: OptionalKeyMap<PopoverPositionType> = {
  right: 'right',
  left: 'left',
  bottom: 'bottom',
  'No Value': '',
}
// export type PopoverPositionType = 'right' | 'left' | 'bottom'

// export interface PopoverBaseProps extends Partial<StyleProps> {
//   position: PopoverPositionType
// }

// export interface PopoverAttrProps extends Partial<PopoverBaseProps> {
//   target: ReactNode
//   content: ReactNode
// }

// export interface PopoverChildrenProps extends Partial<PopoverBaseProps> {
//   children: ReactNode
// }

// export type PopoverProps = PopoverAttrProps | PopoverChildrenProps

// export type PopoverPartProps = Partial<BasePartProps>

{
  /* <div class="popover popover-right">
  <button class="btn btn-primary">right popover</button>
  <div class="popover-container">
<div class="card">
                      <div class="card-header">
                        <div class="card-title h5">Apple</div>
                        <div class="card-subtitle text-gray">Software and hardware</div>
                      </div>
                      <div class="card-body">To make a contribution to the world by making tools for the mind that advance humankind.</div>
                      <div class="card-footer">
                        <button class="btn btn-primary">Buy</button>
                      </div>
                    </div>
</div> */
}
const component = () => {
  return (
    <Popover
      position={optionalSelect('position', popoverPositionTypes, 'right')}
      target={<Button color="primary">popover</Button>}
      content={
        <Card>
          <CardHeader>
            <CardTitle className="h5">Apple</CardTitle>
            <CardSubtitle className="text-gray">
              Software and hardware
            </CardSubtitle>
          </CardHeader>
          <CardBody>
            To make a contribution to the world by making tools for the mind
            that advance humankind.
          </CardBody>
          <CardFooter>
            <Button color="primary">Buy</Button>
          </CardFooter>
        </Card>
      }
    />
  )
}

export default component
