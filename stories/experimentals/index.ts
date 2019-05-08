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
  .add('Autocomplete', Autocomplete, Autocomplete.options)
  .add('Calendar', Calendar, Calendar.options)
  .add('Carousel', Carousel, Carousel.options)
  .add('ComparisonSlider', ComparisonSlider, ComparisonSlider.options)
  .add('Filter', Filter, Filter.options)
  .add('Meter', Meter, Meter.options)
  .add('OffCanvas', OffCanvas, OffCanvas.options)
  .add('Parallax', Parallax, Parallax.options)
  .add('Progress', Progress, Progress.options)
  .add('Slider', Slider, Slider.options)
  .add('Timeline', Timeline, Timeline.options)
  .add('Viewer360Degree', Viewer360Degree, Viewer360Degree.options)
