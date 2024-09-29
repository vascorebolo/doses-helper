
import { FC } from 'react'
import InputProps from './Input.types'

const Input:FC<InputProps> = ({ name, onChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        type="number"
        onChange={onChange}
        id={name}
        placeholder={name}
        value={value}
      />
    </div>
  )
}

export default Input