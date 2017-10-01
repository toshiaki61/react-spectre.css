/* @flow */
import React from 'react';

export type ItemProps = {
  tag: string,
  title: string,
  subtitle: string,
};
export type FilterProps = {
  tags: { [key: string]: string },
  data: Array<ItemProps>,
  active: string,
  onChange: (e: Event, id: string) => void,
};
const Filter = ({ tags, data, active, onChange }: FilterProps) => (
  <div className="filter">
    {Object.keys(tags).map(key => (
      <input
        key={`${key}_input`}
        id={key}
        className="filter-tag"
        name="filter-radio"
        checked={key === active}
        type="radio"
        hidden
        onChange={e => onChange(e, key)}
      />
    ))}

    <div className="filter-nav">
      {Object.keys(tags).map(key => (
        <label
          key={`${key}_nav`}
          className="chip"
          htmlFor={key}
        >{tags[key]}</label>
      ))}
    </div>
    <div className="filter-body columns">
      {data.map(({ tag, title, subtitle }, i) => {
        const key = `card_${i}`;
        return (
          <div key={key} className="column col-4 filter-item" data-tag={tag}>
            <div className="card" style={{ marginBottom: '0.4rem' }}>
              <div className="card-header">
                <div className="card-title">{title}</div>
                <div className="card-subtitle">{subtitle}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Filter;
