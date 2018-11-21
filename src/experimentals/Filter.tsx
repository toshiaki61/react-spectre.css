import React, {ChangeEvent, ReactElement} from 'react'

export interface ItemProps {
  tag: string
  title: string
  subtitle: string
}
export interface IFilterProps {
  tags: {
    [key: string]: string
  }
  data: ItemProps[]
  active: string
  onChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void
}
const Filter = ({
  tags,
  data,
  active,
  onChange,
}: IFilterProps): ReactElement<IFilterProps> => (
  <div className="filter">
    {Object.keys(tags).map(key => {
      const handleChange = (e: ChangeEvent<any>) => onChange(e, key)
      return (
        <input
          key={`${key}_input`}
          id={key}
          className="filter-tag"
          name="filter-radio"
          checked={key === active}
          type="radio"
          hidden
          onChange={handleChange}
        />
      )
    })}

    <div className="filter-nav">
      {Object.keys(tags).map(key => (
        <label key={`${key}_nav`} className="chip" htmlFor={key}>
          {tags[key]}
        </label>
      ))}
    </div>
    <div className="filter-body columns">
      {data.map(({tag, title, subtitle}, i) => {
        const key = `card_${i}`
        return (
          <div key={key} className="column col-4 filter-item" data-tag={tag}>
            <div className="card" style={{marginBottom: '0.4rem'}}>
              <div className="card-header">
                <div className="card-title">{title}</div>
                <div className="card-subtitle">{subtitle}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)
export default Filter