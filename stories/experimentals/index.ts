import {withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react'

import DegreeViewer from './360DegreeViewer'
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
const stories = storiesOf('Elements', module)

stories
  .addDecorator(withKnobs)
  .add('360DegreeViewer', DegreeViewer)
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
