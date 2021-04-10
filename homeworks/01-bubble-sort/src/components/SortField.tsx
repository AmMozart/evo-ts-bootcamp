import React from 'react'
import style from './SortField.module.css'

type Props = {
  array: number[]
}

function SortField({ array }: Props): JSX.Element {
  return (
    <div className={style.sortedField}>
      {array.map((n, i) =>
        <div
          key={i}
          className={style.bubble}
          style={{ height: `${n}px` }}>
        </div>
      )}
    </div>
  )
}

export default SortField