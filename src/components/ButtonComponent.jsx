import React from 'react'

const ButtonComponent = ({label , onClickHandler}) => {
  return (
    <div>
        <button onClick={onClickHandler}>
        {label}
     </button>
    </div>
  )
}

export default ButtonComponent