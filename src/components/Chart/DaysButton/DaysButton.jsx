import React from 'react'
import "./DaysButton.css"

const SelectButton = ({ children, selected, onClick }) => {
    return (
        <span
            onClick={onClick}
            className='selectbutton'>
            {children}
        </span>
    )
}

export default SelectButton