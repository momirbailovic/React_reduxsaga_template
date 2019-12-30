//@flow

import * as React from 'react'
import FilterBtns from '../common/FilterButton'

//define props
type Props = {
  labelClassName: string,
  children: React.Node,
  label: string,
  onFilterButtonClick: (item: string) => any,
  activeFilter: string,
  filterButtonList: Array<string>,
  techClass: string,
  techContentClass: string,
  tagRowClass?: string,
  onTextChange: (item: any) => any,
  isSuggestProductVisible?: boolean,
  placeholder?: string,
  value?: string
  // deviceByName?: Object
}

const InputSearchBar = (props: Props) => {
  const {
    labelClassName,
    children,
    onFilterButtonClick,
    activeFilter,
    filterButtonList,
    label,
    techClass,
    techContentClass,
    tagRowClass,
    onTextChange,
    isSuggestProductVisible,
    value,
    placeholder
    // deviceByName
  } = props

  return (
    <div className={techClass}>
      <div className={techContentClass}>
        <label htmlFor="" className={labelClassName}>
          {label}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onTextChange}
          value={value}
        />
        {children}
      </div>
      <div className={tagRowClass}>
        {isSuggestProductVisible && (
          <FilterBtns
            onClick={onFilterButtonClick}
            activeFilter={activeFilter}
            btnList={filterButtonList}
          />
        )}
      </div>
    </div>
  )
}

export default InputSearchBar
