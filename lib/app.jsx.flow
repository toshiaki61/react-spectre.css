import * as React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import AutocompleteExample from './example/Autocomplete';
import CalendarExample from './example/Calendar';
import CarouselExample from './example/Carousel';
import DropdownExample from './example/Dropdown';
import FilterExample from './example/Filter';
import ModalExample from './example/Modal';

import {
  Accordion, Avatar, Bar, Button, Calendar, Card, Column6, Columns,
  ComparisonSlider, Empty, Icon, Menu, Meter, Nav, Pagination, Panel,
  Parallax, Progress, Slider, Step, Tile, Timeline, position,
  OffCanvas, Table, Toast, Tab,
} from './';

const App = () => (
  <OffCanvas
    sidebar={{ content: <span>sidebar</span>, className: 'flex-centered' }}
  >
    <div
      style={{
        maxWidth: '960px',
        flex: '1 1 auto',
        padding: '0 4rem',
        width: 'calc(100vw - 12rem)',
      }}
    >
      <Table
        header={['Name', 'Genre', 'Release date']}
        contents={[
          ['The Shawshank Redemption', 'Crime, Drama', '14 October 1994'],
          ['The Godfather', 'Crime, Drama', '24 March 1972'],
          ['Schindler\'s List', 'Biography, Drama, History', '4 February 1994'],
          ['Se7en', 'Crime, Drama, Mystery', '22 September 1995'],
        ]}
      />
      <Toast content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." onClearClick={() => console.log('clear')} />
      <Tab
        active="1"
        onClick={(e, id) => console.log('tab: ', id)}
        items={[
          { id: '1', name: 'Music', badge: 999 },
          { id: '2', name: 'Playlists' },
          { id: '3', name: 'Radio' },
        ]}
      />
      <Step
        active="4"
        items={[
          { id: '1', name: 'Step 1', tooltip: 'Step 1 tooltip' },
          { id: '2', name: 'Step 2', tooltip: 'Step 2 tooltip' },
          { id: '3', name: 'Step 3', tooltip: 'Step 3 tooltip' },
          { id: '4', name: 'Step 4', tooltip: 'Step 4 tooltip' },
        ]}
      />
      <Nav
        onClick={(e, key) => console.log('clicked: ', key)}
        items={[
          { id: '1', name: 'Elements' },
          {
            id: '2',
            name: 'Layout',
            items: [
              { id: '2-1', name: 'Flexbox' },
              { id: '2-2', name: 'Responsible' },
              { id: '2-3', name: 'Navbar' },
              { id: '2-4', name: 'Empty state' },
            ],
          },
          { id: '3', name: 'Components' },
          { id: '4', name: 'Utilities' },
        ]}
        active="2"
      />
      <Panel headerClass="text-center" header={<p>aaa</p>} content="test" footer="footer" />
      <Pagination total={34} current={1} title={{ prev: { title: 'test1', subtitle: 'test2' }, next: { title: 'test3', subtitle: 'test4' } }} />
      <Pagination total={34} current={1} onClick={(e, page) => console.log('page: ', page)} />
      <CalendarExample />
      <ModalExample />
      <DropdownExample />
      <Empty icon="people" title="test" subtitle="sub" />
      <Columns>
        <Column6>
          <Card items={[
            {
              type: 'header',
              content: {
                title: 'Google I/O',
                subtitle: 'Software and hardware',
                button: (
                  <Button primary className="float-right">
                    <Icon plus />
                  </Button>
                ),
              },
            },
            { type: 'body', content: 'body' },
            {
              type: 'footer',
              content: [
                <a key="button-1" href="#cards" className="btn btn-primary">Search</a>,
                <a key="button-2" href="#cards" className="btn btn-link">Share</a>,
              ],
            },
            {
              type: 'image',
              content: <img className="img-responsive" src="//picturepan2.github.io/spectre/img/macos-sierra-2.jpg" alt="macOS Sierra" />,
            },
          ]}
          />
        </Column6>
        <Column6>
          <Card items={[]} />
        </Column6>
      </Columns>
      <Bar slider items={[{ value: 15 }, { value: 45 }]} />
      <Bar
        className={position({ marginBottom: true })}
        items={[{
          role: 'progressbar', style: { width: '25%' }, 'aria-valuenow': 25, 'aria-valuemin': 0, 'aria-valuemax': 100,
        }]}
      />
      <Bar
        small
        items={[
          { tooltip: '15%', content: '15%', style: { width: '15%' } },
          { tooltip: '25%', content: '25%', style: { width: '25%', backgroundColor: 'gray' } },
        ]}
      />
      <Avatar lg initial="kkkkkk" presence="online" />
      <Tile icon={<Icon people className="centered" />} compact title="アイウエオ" subtitle="カキクケコ" />
      <AutocompleteExample />
      <Menu
        onClick={(e, id) => console.log(id)}
        contents={[
          { id: 'e-1', link: '#accordions', content: 'Element 1' },
          {
            id: 'e-2', link: '#accordions', content: 'Element 2', badge: 8,
          },
          { link: '', content: '', divider: 'aaa' },
          { id: 'e-3', link: '#accordions', content: 'Element 3' },
        ]}
      />
      <Accordion
        exclusive
        useIcon
        menus={[
          {
            header: 'Elements',
            contents: [
              { link: '#accordions', content: 'Element 1' },
              { link: '#accordions', content: 'Element 2', badge: 8 },
              { link: '', content: '', divider: 'aaa' },
              { link: '#accordions', content: 'Element 3' },
            ],
          },
          {
            header: 'Layout',
            contents: [
              { link: '#accordions', content: 'Layout 1' },
              { link: '#accordions', content: 'Layout 2', badge: 8 },
              { link: '', content: '', divider: 'aaa' },
              { link: '#accordions', content: 'Layout 3' },
            ],
          },
        ]}
      />
      <Timeline timelines={['March 2016', 'February 2017', 'March 2017']}>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-subtitle">March 2016</p>
            <p className="tile-title">Initial commit</p>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-subtitle">February 2017</p>
            <p className="tile-title">New Documents experience</p>
            <p className="tile-title"><a href="components.html#bars">Bars</a>: represent the progress of a task</p>
            <p className="tile-title"><a href="components.html#steps">Steps</a>: progress indicators of a sequence of task steps</p>
            <p className="tile-title"><a href="components.html#tiles">Tiles</a>: repeatable or embeddable information blocks</p>
          </div>
          <div className="tile-action">
            <button className="btn">View</button>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-subtitle">March 2017</p>
            <p className="tile-title"><a href="elements.html#icons">Icons</a>: single-element, responsive and pure CSS icons</p>
            <p className="tile-title"><a href="components.html#popovers">Popovers</a>: small overlay content containers</p>
            <p className="tile-title"><a href="experimentals.html#calendars">Calendars</a>: date or date range picker and events display</p>
            <p className="tile-title"><a href="experimentals.html#carousels">Carousels</a>: slideshows for cycling images</p>
          </div>
          <div className="tile-action">
            <button className="btn">View</button>
          </div>
        </div>
      </Timeline>
      <Progress />
      <Parallax />
      <Meter />
      <FilterExample />
      <ComparisonSlider
        before={{ src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg', alt: 'macOS Sierra Wallpaper', className: '' }}
        after={{
          src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg',
          alt: 'macOS Sierra Wallpaper',
          style: { filter: 'grayscale(100%)' },
        }}
      />
      <CarouselExample />
      <Calendar
        current={moment()}
        weekdays={['日', '月', '火', '水', '木', '金', '土']}
        options={{
          data: [
            { date: moment().format(), tooltip: 'test', type: 'today' },
            { date: '2017-09-12', tooltip: 'aaa', type: 'disabled' },
            { date: '2017-09-18', tooltip: 'bbb', type: 'badge' },
          ],
          range: [
            { start: '2017-09-01', end: '2017-09-03' },
            { start: '2017-09-04', end: '2017-09-05' },
          ],
        }}
        onMonthClick={(e, m) => console.log('month', m)}
        onDateClick={(e, d) => console.log('click', d)}
      />
      <Slider />
    </div>
  </OffCanvas>
);
ReactDOM.render(<App />, document.getElementById('root'));
