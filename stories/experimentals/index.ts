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
  .add('Autocomplete', Autocomplete)
  .add('Calendar', Calendar)
  .add('Carousel', Carousel)
  .add('ComparisonSlider', ComparisonSlider)
  .add('Filter', Filter)
  .add('Meter', Meter)
  .add('OffCanvas', OffCanvas)
  .add('Parallax', Parallax)
  .add('Progress', Progress)
  .add('Slider', Slider)
  .add('Timeline', Timeline)
  .add('Viewer360Degree', Viewer360Degree)
