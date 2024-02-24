import React from 'react'
import './TopButton.scss'

function TopButton({prop}) {
  return (
    <div>
      <button id='button'>{prop}</button>
    </div>
  )
}

export default TopButton