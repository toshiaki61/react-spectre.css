import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import Autocomplete from './Autocomplete'
import Calendar from './Calendar'
import Carousel from './Carousel'
import ComparisonSlider from './ComparisonSlider'
import Filter from './Filter'
import Meter from './Meter'
import OffCanvas from './OffCanvas'
import Parallax from './Parallax'
import Progress from './Progress'
import Slider from './Slider'
import Timeline from './Timeline'
import Viewer360Degree from './Viewer360Degree'

const stories = storiesOf('Experimentals', module)

stories
  .addDecorator(withKnobs)
  .add('Autocomplete', Autocomplete[0], Autocomplete[1])
  .add('Calendar', Calendar[0], Calendar[1])
  .add('Carousel', Carousel[0], Carousel[1])
  .add('ComparisonSlider', ComparisonSlider[0], ComparisonSlider[1])
  .add('Filter', Filter[0], Filter[1])
  .add('Meter', Meter[0], Meter[1])
  .add('OffCanvas', OffCanvas[0], OffCanvas[1])
  .add('Parallax', Parallax[0], Parallax[1])
  .add('Progress', Progress[0], Progress[1])
  .add('Slider', Slider[0], Slider[1])
  .add('Timeline', Timeline[0], Timeline[1])
  .add('Viewer360Degree', Viewer360Degree[0], Viewer360Degree[1])
