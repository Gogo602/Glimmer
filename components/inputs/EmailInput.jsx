
import React from 'react'

export default function EmailInput({label, name, value, onChange, required=false }) {
  return (
    <div className="mb-5">
          <label htmlFor={name}  className="mb-2 font-bold">
            {label}
          </label>
          <input
            type="email"
             id={name}
            name={name}
            className="border border-white hover:border-[#270A63E5] px-4 py-2 rounded-md block outline-none w-full mt-2 pl-10"
            value={value}
            onChange={onChange}
            required={required}
          />  
    </div>
  )
}
