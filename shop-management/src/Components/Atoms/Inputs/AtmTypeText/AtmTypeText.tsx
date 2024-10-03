import React from 'react'

interface InputProps {
    value: string
    placeholder?: string
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (e:React.ChangeEvent<HTMLInputElement>) => void
    label?: string
    name: string
    className: string

}

const AtmTypeText: React.FC<InputProps> = ({value, placeholder,onChange, onBlur, label, name, className}) => {
  return (
    <div>
        <label>{label}</label>
        <input 
        type='text'
        value='string'  
        placeholder={placeholder}
        onChange={onChange} 
        onBlur={onBlur}
        name={name}
        className=''></input>
    </div>
  )
}

export default AtmTypeText