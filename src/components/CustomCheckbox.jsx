import React from 'react'
import './CustomCheckbox.scss';

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
      <span className="label-text">{label}</span>
    </label>
  )
}

export default CustomCheckbox