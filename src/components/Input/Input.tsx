
import { FC } from 'react'
import InputProps from './Input.types'

const Input:FC<InputProps> = ({ name, onChange, value }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{name}</label>
      <input
        type="number"
        onChange={onChange}
        id={name}
        placeholder={name}
        value={value ?? undefined}
      />
    </div>
  )
}

export default Input