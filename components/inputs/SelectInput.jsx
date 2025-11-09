import React from 'react'

export default function SelectInput({label, name, value, onChange, options}) {
  return (
     <div className="mb-5">
          <label htmlFor={name} className="mb-2 font-bold">
            {label}
          </label>
          <select
            name={name}
             id={name}
            className="border border-white hover:border-[#270A63E5] px-4 py-2 rounded-md block outline-none w-full mt-2 pl-10"
            value={value}
            onChange={onChange}
          >
              {options.map((option) => (
                <option key={option.value} value={option.value} className='bg-[#270A63E5]'>{option.label}</option>
              ))}
          </select>
    </div>
  )
}
