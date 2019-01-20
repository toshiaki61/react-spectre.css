// tslint:disable:jsx-no-lambda
// tslint:disable:no-console
import React, { Fragment } from 'react';
import { format } from 'date-fns';
import AutocompleteExample from './example/Autocomplete';
import CalendarExample from './example/Calendar';
import CarouselExample from './example/Carousel';
import DropdownExample from './example/Dropdown';
import FilterExample from './example/Filter';
import ModalExample from './example/Modal';
import { Accordion, attr, Avatar, Bar, Button, Calendar, Card, Column, Columns, ComparisonSlider, Empty, Icon, Menu, Meter, Nav, OffCanvas, OffCanvasContent, OffCanvasOverlay, OffCanvasSidebar, OffCanvasToggle, Pagination, Panel, Parallax, Progress, Slider, Step, Tab, Table, Tile, TileTitle, Timeline, Toast, } from './';
var now = new Date();
var sidebarId = 'sidebar-id';
var App = function () { return (<OffCanvas>
    <OffCanvasToggle sidebarId={sidebarId}>
      <Icon type="menu"/>
    </OffCanvasToggle>
    <OffCanvasSidebar id={sidebarId}>
      <span>sidebar</span>
    </OffCanvasSidebar>
    <OffCanvasOverlay />
    <OffCanvasContent>
      <div style={{
    maxWidth: '960px',
    flex: '1 1 auto',
    padding: '0 4rem',
    width: 'calc(100vw - 12rem)',
}}>
        <Table columns={['Name', 'Genre', 'Release date']} data={[
    {
        Name: 'The Shawshank Redemption',
        Genre: 'Crime, Drama',
        'Release date': '14 October 1994',
    },
    {
        Name: 'The Godfather',
        Genre: 'Crime, Drama',
        'Release date': '24 March 1972',
    },
    {
        Name: "Schindler's List",
        Genre: 'Biography, Drama, History',
        'Release date': '4 February 1994',
    },
    {
        Name: 'Se7en',
        Genre: 'Crime, Drama, Mystery',
        'Release date': '22 September 1995',
    },
]}/>
        <Toast onClearClick={function () { return console.log('clear'); }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Toast>
        <Tab activeId="1" onClick={function (e, id) { return console.log('tab: ', id); }} items={[
    { id: '1', title: 'Music', badge: 999 },
    { id: '2', title: 'Playlists' },
    { id: '3', title: 'Radio' },
]}/>
        <Step activeId="4" items={[
    { id: '1', children: 'Step 1', tooltip: 'Step 1 tooltip' },
    { id: '2', children: 'Step 2', tooltip: 'Step 2 tooltip' },
    { id: '3', children: 'Step 3', tooltip: 'Step 3 tooltip' },
    { id: '4', children: 'Step 4', tooltip: 'Step 4 tooltip' },
]}/>
        <Nav onClick={function (e, key) { return console.log('clicked: ', key); }} activeId="2" items={[
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
]}/>
        <Panel headerClass="text-center" header={<p>aaa</p>} content="test" footer="footer"/>
        <Pagination total={34} current={1} title={{
    prev: { title: 'test1', subtitle: 'test2' },
    next: { title: 'test3', subtitle: 'test4' },
}}/>
        <Pagination total={34} current={1} onClick={function (e, page) { return console.log('page: ', page); }}/>
        <CalendarExample />
        <ModalExample />
        <DropdownExample />
        <Empty iconType="people" title="test" subtitle="sub"/>
        <Columns>
          <Column size={6}>
            <Card items={[
    {
        type: 'header',
        content: {
            title: 'Google I/O',
            subtitle: 'Software and hardware',
            button: (<Button color="primary" className="float-right">
                        <Icon type="plus"/>
                      </Button>),
        },
        id: 'card-header',
    },
    { type: 'body', content: 'body', id: 'card-body' },
    {
        type: 'footer',
        content: [
            <a key="button-1" href="#cards" className="btn btn-primary">
                      Search
                    </a>,
            <a key="button-2" href="#cards" className="btn btn-link">
                      Share
                    </a>,
        ],
        id: 'card-body',
    },
    {
        type: 'image',
        content: (<img className="img-responsive" src="//picturepan2.github.io/spectre/img/macos-sierra-2.jpg" alt="macOS Sierra"/>),
        id: 'card-image',
    },
]}/>
          </Column>
          <Column>
            <Card items={[]}/>
          </Column>
        </Columns>
        <Bar slider items={[{ value: 15 }, { value: 45 }]}/>
        <Bar {...attr({ marginBottom: true })} items={[
    {
        role: 'progressbar',
        style: { width: '25%' },
        'aria-valuenow': 25,
        'aria-valuemin': 0,
        'aria-valuemax': 100,
    },
]}/>
        <Bar small items={[
    { tooltip: '15%', content: '15%', style: { width: '15%' } },
    {
        tooltip: '25%',
        content: '25%',
        style: { width: '25%', backgroundColor: 'gray' },
    },
]}/>
        <Avatar size="lg" initial="kkkkkk" presence="online"/>
        <Tile icon={<Icon type="people" className="centered"/>} compact title="アイウエオ" subtitle="カキクケコ" content="content"/>
        <AutocompleteExample />
        <Menu onClick={function (e, id) { return console.log(id); }} contents={[
    { id: 'e-1', link: '#accordions', content: 'Element 1' },
    {
        id: 'e-2',
        link: '#accordions',
        content: 'Element 2',
        badge: 8,
    },
    { link: '', content: '', divider: 'aaa' },
    { id: 'e-3', link: '#accordions', content: 'Element 3' },
]}/>
        <Accordion menus={[
    {
        id: 'accordion-0',
        header: 'Elements',
        contents: [
            { link: '#accordions', content: 'Element 1' },
            { link: '#accordions', content: 'Element 2', badge: 8 },
            { link: '', content: '', divider: 'aaa' },
            { link: '#accordions', content: 'Element 3' },
        ],
    },
    {
        id: 'accordion-1',
        header: 'Layout',
        contents: [
            { link: '#accordions', content: 'Layout 1' },
            { link: '#accordions', content: 'Layout 2', badge: 8 },
            { link: '', content: '', divider: 'aaa' },
            { link: '#accordions', content: 'Layout 3' },
        ],
    },
]}/>
        <Timeline timelines={[
    {
        title: 'March 2016',
        content: (<Fragment>
                  <TileTitle>Initial commit</TileTitle>
                </Fragment>),
    },
    {
        title: 'February 2017',
        content: (<Fragment>
                  <TileTitle>New Documents experience</TileTitle>
                  <TileTitle>
                    <a href="components.html#bars">Bars</a>: represent the
                    progress of a task
                  </TileTitle>

                  <TileTitle>
                    <a href="components.html#steps">Steps</a>: progress
                    indicators of a sequence of task steps
                  </TileTitle>
                  <TileTitle>
                    <a href="components.html#tiles">Tiles</a>: repeatable or
                    embeddable information blocks
                  </TileTitle>
                </Fragment>),
        action: <button className="btn">View</button>,
    },
    {
        title: 'March 2017',
        content: (<Fragment>
                  <TileTitle>Initial commit</TileTitle>
                </Fragment>),
    },
]}>
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
              <p className="tile-title">
                <a href="components.html#bars">Bars</a>: represent the progress
                of a task
              </p>
              <p className="tile-title">
                <a href="components.html#steps">Steps</a>: progress indicators
                of a sequence of task steps
              </p>
              <p className="tile-title">
                <a href="components.html#tiles">Tiles</a>: repeatable or
                embeddable information blocks
              </p>
            </div>
            <div className="tile-action"/>
          </div>
          <div className="tile">
            <div className="tile-content">
              <p className="tile-subtitle">March 2017</p>
              <p className="tile-title">
                <a href="elements.html#icons">Icons</a>: single-element,
                responsive and pure CSS icons
              </p>
              <p className="tile-title">
                <a href="components.html#popovers">Popovers</a>: small overlay
                content containers
              </p>
              <p className="tile-title">
                <a href="experimentals.html#calendars">Calendars</a>: date or
                date range picker and events display
              </p>
              <p className="tile-title">
                <a href="experimentals.html#carousels">Carousels</a>: slideshows
                for cycling images
              </p>
            </div>
            <div className="tile-action">
              <button className="btn">View</button>
            </div>
          </div>
        </Timeline>
        <Progress />
        <Parallax src="//picturepan2.github.io/spectre/img/osx-yosemite-2.jpg" title="test" alt="test"/>
        <Meter value={30}/>
        <FilterExample />
        <ComparisonSlider before={{
    src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg',
    alt: 'macOS Sierra Wallpaper',
    className: '',
}} after={{
    src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg',
    alt: 'macOS Sierra Wallpaper',
    style: { filter: 'grayscale(100%)' },
}}/>
        <CarouselExample />
        <Calendar lg current={now} 
// navFormat="YYYY-MM"
nav={{
    current: format(now, 'MMMM YYYY'),
    prev: {
        onClick: function (e) {
            e.preventDefault();
            console.log('prev_clicked');
        },
    },
    next: {
        onClick: function (e) {
            e.preventDefault();
            console.log('next_clicked');
        },
    },
}} weekdays={['日', '月', '火', '水', '木', '金', '土']} options={{
    data: [
        { date: format(now, 'YYYY-MM-DD'), tooltip: 'test', type: 'today' },
        { date: '2017-09-12', tooltip: 'aaa', type: 'disabled' },
        { date: '2017-09-18', tooltip: 'bbb', type: 'badge' },
    ],
    range: [
        { start: '2017-09-01', end: '2017-09-03' },
        { start: '2017-09-04', end: '2017-09-05' },
    ],
}} 
// onMonthClick={(e, m) => console.log('month', m)}
onDateClick={function (e, d) { return console.log('click', d); }}/>
        <Slider value={32} onChange={function (e) { return console.log('slide:', e.target.value); }}/>
        <Menu contents={[{ content: 'test' }, { content: <CarouselExample /> }]}/>
      </div>
    </OffCanvasContent>
  </OffCanvas>); };
export default App;
//# sourceMappingURL=App.jsx.map