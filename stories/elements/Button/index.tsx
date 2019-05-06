import * as React from 'react'

import {action} from '@storybook/addon-actions'
import {boolean, number, object, select, text} from '@storybook/addon-knobs'
import {withLiveEdit} from 'storybook-addon-react-live-edit'
import reactElementToJSXString from 'react-element-to-jsx-string'

import {Button, ButtonColorType, ButtonSizeType, ButtonType} from '../../../src'
import {OptionalKeyMap, optionalSelect} from '../../utils'

// const sizeOptions: OptionalKeyMap<ButtonSizeType> = {
//   sm: 'sm',
//   lg: 'lg',
//   'No Value': '',
// }
// const colorOptions: OptionalKeyMap<ButtonColorType> = {
//   success: 'success',
//   error: 'error',
//   link: 'link',
//   primary: 'primary',
//   'No Value': '',
// }

// const component = () => (
//   <Button
//     type={select('Type', ['button', 'submit'], 'button') as ButtonType}
//     size={optionalSelect<ButtonSizeType | ''>('Size', sizeOptions, '')}
//     color={optionalSelect<ButtonColorType | ''>('Color', colorOptions, '')}
//     loading={boolean('loading', false)}
//     blockButton={boolean('block', false)}
//     inputGroup={boolean('inputGroup', false)}
//     clearButton={boolean('clear', false)}
//     actionButton={boolean('actionButton', false)}
//     circle={boolean('circle', false)}
//     disabled={boolean('disabled', false)}
//     onClick={action('button_clicked')}
//     className={text('ClassName', '')}
//     style={object('Style', {})}
//   >
//     Great Success
//   </Button>
// )
// const a = () => <Button>test</Button>
// export default component
// console.log('Button', Button)
const component = (
  <Button
    type="button"
    size="lg" // lg | sm
  >
    {/** aaa */}
    sample button
  </Button>
)
export const B = () => <Button>test</Button>

export default withLiveEdit(reactElementToJSXString(component), {React, Button})
