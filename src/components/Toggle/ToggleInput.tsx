import { FC } from 'react'
import { ToggleInputProps } from './Toggle.types'

const toggleTrackClassName = `
  text-center
  relative
  border-2
  border-green-800
  h-6
  rounded-full
  overflow-hidden
`

const toggleInputClassName = `
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
`

const ToggleInput: FC<ToggleInputProps> = ({
  checked,
  name,
  onChange = () => {},
}) => {
  return (
    <div className={toggleTrackClassName}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        className={toggleInputClassName}
        style={{ fontSize: 0 }}
      />
    </div>
  )
}

export default ToggleInput
