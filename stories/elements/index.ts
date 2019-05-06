import * as React from 'react'
import {withKnobs} from '@storybook/addon-knobs'
import {addDecorator, storiesOf} from '@storybook/react'
import {withLiveEditScope, withLiveEdit} from 'storybook-addon-react-live-edit'
import {withInfo} from '@storybook/addon-info'

import Button, {B} from './Button'
import Form from './Form'
import Icon from './Icon'
import Label from './Label'
import Table from './Table'

const stories = storiesOf('Elements', module)

stories
  // .addDecorator(withKnobs)
  // .addDecorator(withLiveEditScope({Button}))
  // .add('Button', Button)
  .add('Button', Button, {
    // info: {components: withInfo(B, {kind: 'Button', story: 'Button'})},
  })
  .add('Form', Form)
  .add('Icon', Icon)
  .add('Label', Label)
  .add('Table', Table)
// ;(stories as any).addLiveSource('demo', `return <div>{scopeTest}</div>`)

// const e = storiesOf('Example', module)
//   .addDecorator(withLiveEditScope({React, Button, scopeTest: 'Passed!'}))
//   .add('Button', withLiveEdit(Button))
// ;(e as any)
//   .addLiveSource(
//     'Demo',
//     `  <Button
//     type="submit"
//   >sample</Button>`
//   )
//   .addLiveSource(
//     'Demo 2',
//     "<div style={{ padding: '10px', border: '3px solid blue', margin: 10 }}>{scopeTest}</div>",
//     {
//       localScopeTest: 'Passed as well!',
//       Test: () => {
//         return null
//         // return <b style={{fontSize: 'xx-large', color: 'orange'}}>{text}</b>
//       },
//     }
//   )
//   .add('Static source', () => 'test')
// addDecorator(withLiveEditScope({Button}))
