import React from 'react'
import up from './../../../../icons/sort-up-svgrepo-com.svg'
import down from './../../../../icons/sort-down-svgrepo-com.svg'
import none from './../../../../icons/sort-svgrepo-com.svg'
// добавить в проект иконки и импортировать
const downIcon = down
const upIcon = up
const noneIcon = none

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (value: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  switch (sort) {
    case '':
      return down
    case down:
      return up
    case  up:
      return ''
    default:
      return down
  }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value


    const onChangeCallback = () => {
      onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{cursor: "pointer"}}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt=''
                style={{width: '20px', cursor: "pointer"}}
            />

        </span>
    )
}

export default SuperSort
