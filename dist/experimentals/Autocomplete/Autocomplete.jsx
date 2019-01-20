import React from 'react';
import { Avatar, Chip, Menu, MenuItem, Tile } from '@components/index';
import { FormIcon, FormInput, HasIcon } from '@elements/index';
import FormAutocomplete from './FormAutocomplete';
import FormAutocompleteInput from './FormAutocompleteInput';
import { filter, mark } from './util';
var Autocomplete = function (_a) {
    var placeholder = _a.placeholder, active = _a.active, selected = _a.selected, suggests = _a.suggests, input = _a.input, loading = _a.loading, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, onClearClick = _a.onClearClick, onSelected = _a.onSelected;
    return (<FormAutocomplete onFocus={onFocus} onBlur={onBlur}>
      <FormAutocompleteInput active={active}>
        {selected.map(function (_a) {
        var id = _a.id, name = _a.name, img = _a.img, initial = _a.initial;
        var handleClearClick = 
        // useCallback(
        function (e) { return onClearClick(e, id); };
        // ,[id])
        return (<Chip key={id} avatar={{ initial: initial, src: img, alt: name }} content={name} clear={active} onClearClick={handleClearClick}/>);
    })}

        {loading ? (<HasIcon position="left">
            <FormInput type="text" placeholder={placeholder} value={input} onChange={onChange}/>
            <FormIcon loading/>
          </HasIcon>) : (<FormInput type="text" placeholder={placeholder} value={input} onChange={onChange}/>)}
      </FormAutocompleteInput>
      <Menu style={{ position: active ? 'static' : 'absolute' }}>
        {suggests
        .filter(function (v) { return filter(input, 'name')(v); })
        .map(function (_a) {
        var id = _a.id, name = _a.name, img = _a.img, initial = _a.initial;
        var handleSelect = 
        // useCallback(
        function (e) {
            e.preventDefault();
            onSelected(e, id);
        };
        // ,[id])
        return (<MenuItem key={id} onClick={handleSelect}>
                <a href="#" onClick={handleSelect}>
                  <Tile compact content={mark(name, input)} icon={<Avatar size="sm" initial={initial} src={img} alt={name}/>}/>
                </a>
              </MenuItem>);
    })}
      </Menu>
    </FormAutocomplete>);
};
Autocomplete.defaultProps = {
    placeholder: 'typing here',
    active: false,
    loading: false,
};
export default Autocomplete;
//# sourceMappingURL=Autocomplete.jsx.map