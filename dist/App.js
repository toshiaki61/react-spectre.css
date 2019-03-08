import * as tslib_1 from "tslib";
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
var App = function () { return (React.createElement(OffCanvas, null,
    React.createElement(OffCanvasToggle, { sidebarId: sidebarId },
        React.createElement(Icon, { type: "menu" })),
    React.createElement(OffCanvasSidebar, { id: sidebarId },
        React.createElement("span", null, "sidebar")),
    React.createElement(OffCanvasOverlay, null),
    React.createElement(OffCanvasContent, null,
        React.createElement("div", { style: {
                maxWidth: '960px',
                flex: '1 1 auto',
                padding: '0 4rem',
                width: 'calc(100vw - 12rem)',
            } },
            React.createElement(Table, { columns: ['Name', 'Genre', 'Release date'], data: [
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
                ] }),
            React.createElement(Toast, { onClearClick: function () { return console.log('clear'); } }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
            React.createElement(Tab, { activeId: "1", onClick: function (e, id) { return console.log('tab: ', id); }, items: [
                    { id: '1', title: 'Music', badge: 999 },
                    { id: '2', title: 'Playlists' },
                    { id: '3', title: 'Radio' },
                ] }),
            React.createElement(Step, { activeId: "4", items: [
                    { id: '1', children: 'Step 1', tooltip: 'Step 1 tooltip' },
                    { id: '2', children: 'Step 2', tooltip: 'Step 2 tooltip' },
                    { id: '3', children: 'Step 3', tooltip: 'Step 3 tooltip' },
                    { id: '4', children: 'Step 4', tooltip: 'Step 4 tooltip' },
                ] }),
            React.createElement(Nav, { onClick: function (e, key) { return console.log('clicked: ', key); }, activeId: "2", items: [
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
                ] }),
            React.createElement(Panel, { headerClass: "text-center", header: React.createElement("p", null, "aaa"), content: "test", footer: "footer" }),
            React.createElement(Pagination, { total: 34, current: 1, title: {
                    prev: { title: 'test1', subtitle: 'test2' },
                    next: { title: 'test3', subtitle: 'test4' },
                } }),
            React.createElement(Pagination, { total: 34, current: 1, onClick: function (e, page) { return console.log('page: ', page); } }),
            React.createElement(CalendarExample, null),
            React.createElement(ModalExample, null),
            React.createElement(DropdownExample, null),
            React.createElement(Empty, { iconType: "people", title: "test", subtitle: "sub" }),
            React.createElement(Columns, null,
                React.createElement(Column, { size: 6 },
                    React.createElement(Card, { items: [
                            {
                                type: 'header',
                                content: {
                                    title: 'Google I/O',
                                    subtitle: 'Software and hardware',
                                    button: (React.createElement(Button, { color: "primary", className: "float-right" },
                                        React.createElement(Icon, { type: "plus" }))),
                                },
                                id: 'card-header',
                            },
                            { type: 'body', content: 'body', id: 'card-body' },
                            {
                                type: 'footer',
                                content: [
                                    React.createElement("a", { key: "button-1", href: "#cards", className: "btn btn-primary" }, "Search"),
                                    React.createElement("a", { key: "button-2", href: "#cards", className: "btn btn-link" }, "Share"),
                                ],
                                id: 'card-body',
                            },
                            {
                                type: 'image',
                                content: (React.createElement("img", { className: "img-responsive", src: "//picturepan2.github.io/spectre/img/macos-sierra-2.jpg", alt: "macOS Sierra" })),
                                id: 'card-image',
                            },
                        ] })),
                React.createElement(Column, null,
                    React.createElement(Card, { items: [] }))),
            React.createElement(Bar, { slider: true, items: [{ value: 15 }, { value: 45 }] }),
            React.createElement(Bar, tslib_1.__assign({}, attr({ marginBottom: true }), { items: [
                    {
                        role: 'progressbar',
                        style: { width: '25%' },
                        'aria-valuenow': 25,
                        'aria-valuemin': 0,
                        'aria-valuemax': 100,
                    },
                ] })),
            React.createElement(Bar, { small: true, items: [
                    { tooltip: '15%', content: '15%', style: { width: '15%' } },
                    {
                        tooltip: '25%',
                        content: '25%',
                        style: { width: '25%', backgroundColor: 'gray' },
                    },
                ] }),
            React.createElement(Avatar, { size: "lg", initial: "kkkkkk", presence: "online" }),
            React.createElement(Tile, { icon: React.createElement(Icon, { type: "people", className: "centered" }), compact: true, title: "\u30A2\u30A4\u30A6\u30A8\u30AA", subtitle: "\u30AB\u30AD\u30AF\u30B1\u30B3", content: "content" }),
            React.createElement(AutocompleteExample, null),
            React.createElement(Menu, { onClick: function (e, id) { return console.log(id); }, contents: [
                    { id: 'e-1', link: '#accordions', content: 'Element 1' },
                    {
                        id: 'e-2',
                        link: '#accordions',
                        content: 'Element 2',
                        badge: 8,
                    },
                    { link: '', content: '', divider: 'aaa' },
                    { id: 'e-3', link: '#accordions', content: 'Element 3' },
                ] }),
            React.createElement(Accordion, { menus: [
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
                ] }),
            React.createElement(Timeline, { timelines: [
                    {
                        title: 'March 2016',
                        content: (React.createElement(Fragment, null,
                            React.createElement(TileTitle, null, "Initial commit"))),
                    },
                    {
                        title: 'February 2017',
                        content: (React.createElement(Fragment, null,
                            React.createElement(TileTitle, null, "New Documents experience"),
                            React.createElement(TileTitle, null,
                                React.createElement("a", { href: "components.html#bars" }, "Bars"),
                                ": represent the progress of a task"),
                            React.createElement(TileTitle, null,
                                React.createElement("a", { href: "components.html#steps" }, "Steps"),
                                ": progress indicators of a sequence of task steps"),
                            React.createElement(TileTitle, null,
                                React.createElement("a", { href: "components.html#tiles" }, "Tiles"),
                                ": repeatable or embeddable information blocks"))),
                        action: React.createElement("button", { className: "btn" }, "View"),
                    },
                    {
                        title: 'March 2017',
                        content: (React.createElement(Fragment, null,
                            React.createElement(TileTitle, null, "Initial commit"))),
                    },
                ] },
                React.createElement("div", { className: "tile" },
                    React.createElement("div", { className: "tile-content" },
                        React.createElement("p", { className: "tile-subtitle" }, "March 2016"),
                        React.createElement("p", { className: "tile-title" }, "Initial commit"))),
                React.createElement("div", { className: "tile" },
                    React.createElement("div", { className: "tile-content" },
                        React.createElement("p", { className: "tile-subtitle" }, "February 2017"),
                        React.createElement("p", { className: "tile-title" }, "New Documents experience"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "components.html#bars" }, "Bars"),
                            ": represent the progress of a task"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "components.html#steps" }, "Steps"),
                            ": progress indicators of a sequence of task steps"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "components.html#tiles" }, "Tiles"),
                            ": repeatable or embeddable information blocks")),
                    React.createElement("div", { className: "tile-action" })),
                React.createElement("div", { className: "tile" },
                    React.createElement("div", { className: "tile-content" },
                        React.createElement("p", { className: "tile-subtitle" }, "March 2017"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "elements.html#icons" }, "Icons"),
                            ": single-element, responsive and pure CSS icons"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "components.html#popovers" }, "Popovers"),
                            ": small overlay content containers"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "experimentals.html#calendars" }, "Calendars"),
                            ": date or date range picker and events display"),
                        React.createElement("p", { className: "tile-title" },
                            React.createElement("a", { href: "experimentals.html#carousels" }, "Carousels"),
                            ": slideshows for cycling images")),
                    React.createElement("div", { className: "tile-action" },
                        React.createElement("button", { className: "btn" }, "View")))),
            React.createElement(Progress, null),
            React.createElement(Parallax, { src: "//picturepan2.github.io/spectre/img/osx-yosemite-2.jpg", title: "test", alt: "test" }),
            React.createElement(Meter, { value: 30 }),
            React.createElement(FilterExample, null),
            React.createElement(ComparisonSlider, { before: {
                    src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg',
                    alt: 'macOS Sierra Wallpaper',
                    className: '',
                }, after: {
                    src: '//picturepan2.github.io/spectre/img/macos-sierra-2.jpg',
                    alt: 'macOS Sierra Wallpaper',
                    style: { filter: 'grayscale(100%)' },
                } }),
            React.createElement(CarouselExample, null),
            React.createElement(Calendar, { lg: true, current: now, 
                // navFormat="YYYY-MM"
                nav: {
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
                }, weekdays: ['日', '月', '火', '水', '木', '金', '土'], options: {
                    data: [
                        { date: format(now, 'YYYY-MM-DD'), tooltip: 'test', type: 'today' },
                        { date: '2017-09-12', tooltip: 'aaa', type: 'disabled' },
                        { date: '2017-09-18', tooltip: 'bbb', type: 'badge' },
                    ],
                    range: [
                        { start: '2017-09-01', end: '2017-09-03' },
                        { start: '2017-09-04', end: '2017-09-05' },
                    ],
                }, 
                // onMonthClick={(e, m) => console.log('month', m)}
                onDateClick: function (e, d) { return console.log('click', d); } }),
            React.createElement(Slider, { value: 32, onChange: function (e) { return console.log('slide:', e.target.value); } }),
            React.createElement(Menu, { contents: [{ content: 'test' }, { content: React.createElement(CarouselExample, null) }] }))))); };
export default App;
//# sourceMappingURL=App.js.map