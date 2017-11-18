import React from 'react';
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
OffCanvas, Table, Toast, Tab } from
'./';

var App = function App() {return (
    React.createElement(OffCanvas, {
        sidebar: { content: React.createElement('span', null, 'sidebar'), className: 'flex-centered' } },

      React.createElement('div', {
          style: {
            maxWidth: '960px',
            flex: '1 1 auto',
            padding: '0 4rem',
            width: 'calc(100vw - 12rem)' } },


        React.createElement(Table, {
          header: ['Name', 'Genre', 'Release date'],
          contents: [
          ['The Shawshank Redemption', 'Crime, Drama', '14 October 1994'],
          ['The Godfather', 'Crime, Drama', '24 March 1972'],
          ['Schindler\'s List', 'Biography, Drama, History', '4 February 1994'],
          ['Se7en', 'Crime, Drama, Mystery', '22 September 1995']] }),


        React.createElement(Toast, { content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', onClearClick: function onClearClick() {return console.log('clear');} }),
        React.createElement(Tab, {
          active: '1',
          onClick: function onClick(e, id) {return console.log('tab: ', id);},
          items: [
          { id: '1', name: 'Music', badge: 999 },
          { id: '2', name: 'Playlists' },
          { id: '3', name: 'Radio' }] }),


        React.createElement(Step, {
          active: '4',
          items: [
          { id: '1', name: 'Step 1', tooltip: 'Step 1 tooltip' },
          { id: '2', name: 'Step 2', tooltip: 'Step 2 tooltip' },
          { id: '3', name: 'Step 3', tooltip: 'Step 3 tooltip' },
          { id: '4', name: 'Step 4', tooltip: 'Step 4 tooltip' }] }),


        React.createElement(Nav, {
          onClick: function onClick(e, key) {return console.log('clicked: ', key);},
          items: [
          { id: '1', name: 'Elements' },
          { id: '2',
            name: 'Layout',
            items: [
            { id: '2-1', name: 'Flexbox' },
            { id: '2-2', name: 'Responsible' },
            { id: '2-3', name: 'Navbar' },
            { id: '2-4', name: 'Empty state' }] },

          { id: '3', name: 'Components' },
          { id: '4', name: 'Utilities' }],

          active: '2' }),

        React.createElement(Panel, { headerClass: 'text-center', header: React.createElement('p', null, 'aaa'), content: 'test', footer: 'footer' }),
        React.createElement(Pagination, { total: 34, current: 1, title: { prev: { title: 'test1', subtitle: 'test2' }, next: { title: 'test3', subtitle: 'test4' } } }),
        React.createElement(Pagination, { total: 34, current: 1, onClick: function onClick(e, page) {return console.log('page: ', page);} }),
        React.createElement(CalendarExample, null),
        React.createElement(ModalExample, null),
        React.createElement(DropdownExample, null),
        React.createElement(Empty, { icon: 'people', title: 'test', subtitle: 'sub' }),
        React.createElement(Columns, null,
          React.createElement(Column6, null,
            React.createElement(Card, { items: [
              { type: 'header',
                content: {
                  title: 'Google I/O',
                  subtitle: 'Software and hardware',
                  button: React.createElement(Button, { primary: true, className: 'float-right' },
                    React.createElement(Icon, { plus: true })) } },


              { type: 'body', content: 'body' },
              { type: 'footer',
                content: [
                React.createElement('a', { key: 'button-1', href: '#cards', className: 'btn btn-primary' }, 'Search'),
                React.createElement('a', { key: 'button-2', href: '#cards', className: 'btn btn-link' }, 'Share')] },

              {
                type: 'image',
                content: React.createElement('img', { className: 'img-responsive', src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg', alt: 'macOS Sierra' }) }] })),




          React.createElement(Column6, null,
            React.createElement(Card, null))),


        React.createElement(Bar, { slider: true, items: [{ value: 15 }, { value: 45 }] }),
        React.createElement(Bar, { className: position({ marginBottom: true }), items: [{ role: 'progressbar', style: { width: '25%' }, 'aria-valuenow': 25, 'aria-valuemin': 0, 'aria-valuemax': 100 }] }),
        React.createElement(Bar, {
          small: true,
          items: [
          { tooltip: '15%', content: '15%', style: { width: '15%' } },
          { tooltip: '25%', content: '25%', style: { width: '25%', backgroundColor: 'gray' } }] }),


        React.createElement(Avatar, { lg: true, initial: 'kkkkkk', presence: 'online' }),
        React.createElement(Tile, { icon: React.createElement(Icon, { people: true, className: 'centered' }), compact: true, title: '\u30A2\u30A4\u30A6\u30A8\u30AA', subtitle: '\u30AB\u30AD\u30AF\u30B1\u30B3' }),
        React.createElement(AutocompleteExample, null),
        React.createElement(Menu, {
          onClick: function onClick(e, id) {return console.log(id);},
          contents: [
          { id: 'e-1', link: '#accordions', content: 'Element 1' },
          { id: 'e-2', link: '#accordions', content: 'Element 2', badge: 8 },
          { link: '', content: '', divider: 'aaa' },
          { id: 'e-3', link: '#accordions', content: 'Element 3' }] }),


        React.createElement(Accordion, {
          exclusive: true,
          useIcon: true,
          menus: [
          { header: 'Elements',
            contents: [
            { link: '#accordions', content: 'Element 1' },
            { link: '#accordions', content: 'Element 2', badge: 8 },
            { link: '', content: '', divider: 'aaa' },
            { link: '#accordions', content: 'Element 3' }] },

          { header: 'Layout',
            contents: [
            { link: '#accordions', content: 'Layout 1' },
            { link: '#accordions', content: 'Layout 2', badge: 8 },
            { link: '', content: '', divider: 'aaa' },
            { link: '#accordions', content: 'Layout 3' }] }] }),



        React.createElement(Timeline, { timelines: ['March 2016', 'February 2017', 'March 2017'] },
          React.createElement('div', { className: 'tile' },
            React.createElement('div', { className: 'tile-content' },
              React.createElement('p', { className: 'tile-subtitle' }, 'March 2016'),
              React.createElement('p', { className: 'tile-title' }, 'Initial commit'))),


          React.createElement('div', { className: 'tile' },
            React.createElement('div', { className: 'tile-content' },
              React.createElement('p', { className: 'tile-subtitle' }, 'February 2017'),
              React.createElement('p', { className: 'tile-title' }, 'New Documents experience'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'components.html#bars' }, 'Bars'), ': represent the progress of a task'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'components.html#steps' }, 'Steps'), ': progress indicators of a sequence of task steps'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'components.html#tiles' }, 'Tiles'), ': repeatable or embeddable information blocks')),

            React.createElement('div', { className: 'tile-action' },
              React.createElement('button', { className: 'btn' }, 'View'))),


          React.createElement('div', { className: 'tile' },
            React.createElement('div', { className: 'tile-content' },
              React.createElement('p', { className: 'tile-subtitle' }, 'March 2017'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'elements.html#icons' }, 'Icons'), ': single-element, responsive and pure CSS icons'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'components.html#popovers' }, 'Popovers'), ': small overlay content containers'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'experimentals.html#calendars' }, 'Calendars'), ': date or date range picker and events display'),
              React.createElement('p', { className: 'tile-title' }, React.createElement('a', { href: 'experimentals.html#carousels' }, 'Carousels'), ': slideshows for cycling images')),

            React.createElement('div', { className: 'tile-action' },
              React.createElement('button', { className: 'btn' }, 'View')))),



        React.createElement(Progress, null),
        React.createElement(Parallax, null),
        React.createElement(Meter, null),
        React.createElement(FilterExample, null),
        React.createElement(ComparisonSlider, {
          before: { src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg', alt: 'macOS Sierra Wallpaper', className: '' },
          after: {
            src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg',
            alt: 'macOS Sierra Wallpaper',
            style: { filter: 'grayscale(100%)' } } }),


        React.createElement(CarouselExample, null),
        React.createElement(Calendar, {
          current: moment(),
          weekdays: ['日', '月', '火', '水', '木', '金', '土'],
          options: {
            data: [
            { date: moment().format(), tooltip: 'test', type: 'today' },
            { date: '2017-09-12', tooltip: 'aaa', type: 'disabled' },
            { date: '2017-09-18', tooltip: 'bbb', type: 'badge' }],

            range: [
            { start: '2017-09-01', end: '2017-09-03' },
            { start: '2017-09-04', end: '2017-09-05' }] },


          onMonthClick: function onMonthClick(e, m) {return console.log('month', m);},
          onDateClick: function onDateClick(e, d) {return console.log('click', d);} }),

        React.createElement(Slider, null))));};



ReactDOM.render(React.createElement(App, null), document.getElementById('root'));