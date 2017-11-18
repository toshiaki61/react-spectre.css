
import React from 'react';












var Filter = function Filter(_ref) {var tags = _ref.tags,data = _ref.data,active = _ref.active,onChange = _ref.onChange;return (
    React.createElement("div", { className: "filter" },
      Object.keys(tags).map(function (key) {return (
          React.createElement("input", {
            key: key + "_input",
            id: key,
            className: "filter-tag",
            name: "filter-radio",
            checked: key === active,
            type: "radio",
            hidden: true,
            onChange: function (_onChange) {function onChange(_x) {return _onChange.apply(this, arguments);}onChange.toString = function () {return _onChange.toString();};return onChange;}(function (e) {return onChange(e, key);}) }));}),



      React.createElement("div", { className: "filter-nav" },
        Object.keys(tags).map(function (key) {return (
            React.createElement("label", {
                key: key + "_nav",
                className: "chip",
                htmlFor: key },
              tags[key]));})),


      React.createElement("div", { className: "filter-body columns" },
        data.map(function (_ref2, i) {var tag = _ref2.tag,title = _ref2.title,subtitle = _ref2.subtitle;
          var key = "card_" + i;
          return (
            React.createElement("div", { key: key, className: "column col-4 filter-item", "data-tag": tag },
              React.createElement("div", { className: "card", style: { marginBottom: '0.4rem' } },
                React.createElement("div", { className: "card-header" },
                  React.createElement("div", { className: "card-title" }, title),
                  React.createElement("div", { className: "card-subtitle" }, subtitle)))));




        }))));};




export default Filter;