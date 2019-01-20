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
