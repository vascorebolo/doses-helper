import { FC } from 'react'
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
      <div className="
        text-center
        relative
        border-2
        border-green-800
        h-6
        rounded-full
        overflow-hidden"
      >
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={value}
          onChange={onChange}
          className="
            inline-block
            cursor-pointer
            w-14
            appearance-none
            h-5
            after:content-['']
            after:ml-0.5
            after:bg-green-600
            after:h-5
            after:w-5
            after:absolute
            after:rounded-full
            after:-left-1
            checked:after:left-9
            after:transition-all
            after:duration-300
          "
          style={{fontSize: 0}}
        />
      </div>
      {labels.right && (
        <label
          htmlFor={name}
          className="w-full inline-block cursor-pointer text-left text-xl text-green-700"
        >
          tm6
        </label>
      )}
    </div>
  )
}

export default Toggle