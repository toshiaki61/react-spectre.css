import React, {ReactElement, ChangeEvent, FocusEvent, MouseEvent} from 'react'
import classnames from 'classnames'
import Chip from './Chip'
import Tile from './Tile'
import Avatar from './Avatar'
import Icon from '../elements/Icon'
import Button from '../elements/Button'

const delimiter: string = '______'
function mark(
  target: string,
  search: string
): string | Array<string | ReactElement<any>> {
  if (!search) {
    return target
  }
  const regex: RegExp = new RegExp(`(${search})`, 'ig')
  return target
    .replace(regex, `${delimiter}$1${delimiter}`)
    .replace(new RegExp(`^${delimiter}|${delimiter}$`, 'g'), '')
    .split(delimiter)
    .filter((row: string) => row !== '')
    .map((row: string, i: number) => {
      if (regex.test(row)) {
        const key: string = `mark-${i}`
        return <mark key={key}>{row}</mark>
      }
      return row
    })
}
function filter(word: string, key: string): (v: SuggestProps) => boolean {
  const regex = new RegExp(word, 'ig')
  return function search(value) {
    if (word === '') {
      return true
    }
    return regex.test(value[key])
  }
}
export interface SuggestProps {
  id: string
  name: string
  img?: string
  initial?: string
}
export interface AutocompleteProps {
  placeholder?: string
  active?: boolean
  selected: Array<SuggestProps>
  suggests: Array<SuggestProps>
  input: string
  loading?: boolean
  onChange: (e: ChangeEvent<any>) => void
  onFocus: (e: FocusEvent<any>) => void
  onBlur: (e: FocusEvent<any>) => void
  onClearClick: (e: MouseEvent<any>, id: string) => void
  onSelected: (e: MouseEvent<any>, id: string) => void
}
const Autocomplete = ({
  placeholder,
  active,
  selected,
  suggests,
  input,
  loading,
  onChange,
  onFocus,
  onBlur,
  onClearClick,
  onSelected,
}: AutocompleteProps): ReactElement<AutocompleteProps> => {
  const classes = classnames('form-autocomplete-input form-input', {
    'is-focused': active,
  })
  const inputNode = (
    <input
      className="form-input"
      type="text"
      placeholder={placeholder}
      value={input}
      onChange={onChange}
    />
  )
  return (
    <div className="form-autocomplete" onFocus={onFocus} onBlur={onBlur}>
      <div className={classes}>
        {selected.map(({id, name, img, initial}) => (
          <Chip
            key={id}
            avatar={{initial, src: img, alt: name}}
            content={name}
            clear={active}
            onClearClick={e => onClearClick(e, id)}
          />
        ))}

        {loading ? (
          <div className="has-icon-left">
            {inputNode}
            <Icon form loading />
          </div>
        ) : (
          inputNode
        )}
      </div>
      <ul className="menu" style={{position: active ? 'static' : 'absolute'}}>
        {suggests
          .filter(v => filter(input, 'name')(v))
          .map(({id, name, img, initial}) => (
            <li key={id} className="menu-item">
              <Button href="#" onClick={e => onSelected(e, id)}>
                <Tile
                  compact
                  content={mark(name, input)}
                  icon={<Avatar sm initial={initial} src={img} alt={name} />}
                />
              </Button>
            </li>
          ))}
      </ul>
    </div>
  )
}
Autocomplete.defaultProps = {
  placeholder: 'typing here',
  active: false,
  loading: false,
}
export default Autocomplete
