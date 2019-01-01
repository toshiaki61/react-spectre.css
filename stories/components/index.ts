import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Tooltip from './Tooltip'

const stories = storiesOf('Components', module)

stories.addDecorator(withKnobs).add('Tooltip', Tooltip)
