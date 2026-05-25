import { FC } from 'react'
import ToggleInput from './ToggleInput'
import { ToggleProps } from './Toggle.types'

const Toggle:FC<ToggleProps> = ({
  value,
  name,
  onChange = () => {},
  labels = { left: '', right: ''}
}) => {
  return (
    <div className="columns-3 gap-2">
      {labels.left && (
        <label
          htmlFor={name}
          className="
            w-full
            inline-block
            cursor-pointer
            text-right
            text-xl
            text-green-700
          "
        >
          tm5
        </label>
      )}
      <ToggleInput
        checked={value}
        name={name}
        onChange={onChange}
      />
      {labels.right && (
        <label
          htmlFor={name}
          className="
            w-full
            inline-block
            cursor-pointer
            text-left
            text-xl
            text-green-700
          "
        >
          tm6
        </label>
      )}
    </div>
  )
}

export default Toggle
