import * as React from 'react'

import {Button} from '../../../src'
import {withLiveEditAndInfo} from '../../utils/withLiveEditAndInfo'

const component = () => (
  <Button
    type={'button'}
    size={'lg'}
    color={'success'}
    // onClick={() => {}}
    className={''}
    style={{}}
  >
    Great Success
  </Button>
)

export default withLiveEditAndInfo(component, {Button})
