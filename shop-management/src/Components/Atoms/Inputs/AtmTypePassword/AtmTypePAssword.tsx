import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { string } from 'yup'
interface InputProps {
    value: string
    placeholder?: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e:React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    name: string
    className: string

}
const AtmTypePAssword: React.FC<InputProps> = ({
    value,
    placeholder,
    onChange,
    onBlur,
    name,
    label,
    className,
}
) => {
    const [showPassword, setShowPassword] = useState(false)

    // Function to togglw password visibility.
    const togglePasswordVisibility = ()=>{
        setShowPassword((prevState)=> !prevState)
    }

  return (
    <div className=''>
        <label className = 'text-2xl font-semibold text-slate-700 ' htmlFor={name}></label>
        <input 
        type= {showPassword? 'text' : 'password'}
        value = {value}
        placeholder = {placeholder}
        onChange={onChange}
        onBlur={onBlur}
            name={name}
            className={`border px-4 py-2  text-gray-900 text-xl ${className}`}
        />

        {/* Password toggle icon */}
        <span className="absolute right-3 top-[50px] text-2xl cursor-pointer text-gray-500"
        onClick ={togglePasswordVisibility}>
{showPassword? <FaEyeSlash/>: <FaEye/>}
        </span>
    </div>
  )
}

export default AtmTypePAssword