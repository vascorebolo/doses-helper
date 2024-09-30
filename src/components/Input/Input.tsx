
import { FC } from 'react'
import InputProps from './Input.types'

const Input:FC<InputProps> = ({
  name,
  onChange,
  value,
  label = ''
}) => {
  return (
    <div className="flex flex-col text-green-700">
      { label && (<label className="text-md px-3 py-2" htmlFor={name}>{ label }</label>) }
      <input
        className="
          appearance-none
          border
          border-green-700
          rounded-md
          text-2xl
          px-3
          py-2
          text-gray-500
          placeholder-gray-300
        "
        type="number"
        onChange={onChange}
        id={name}
        value={value ?? undefined}
      />
    </div>
  )
}

export default Input