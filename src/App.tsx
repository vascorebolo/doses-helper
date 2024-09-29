import { useEffect } from 'react'
import Input  from '@components/Input'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import useDoseHelperStore from './state/state'

function App() {
  const original = useDoseHelperStore((state) => state.original)
  const desired = useDoseHelperStore((state) => state.desired)
  const toCalculate = useDoseHelperStore((state) => state.toCalculate)
  const calculated = useDoseHelperStore((state) => state.calculated)
  const changeValue = useDoseHelperStore((state) => state.changeValue)
  const updateCalc = useDoseHelperStore((state) => state.updateCalc)


  useEffect(() => {
    updateCalc()
  }, [original, desired, toCalculate]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value
    const element = e.target?.id

    switch (element) {
      case "value to calculate":
        changeValue(Number(value), "toCalculate")
        break

      case "intended":
        changeValue(Number(value), "desired")
        break

      default:
        changeValue(Number(value), element)
        break
    }
  }


  return (
    <div>
      <header>Dose Helper</header>
      <div>
        <Input name="original" value={original} onChange={changeHandler} />
        <Input name="intended" value={desired} onChange={changeHandler} />
        <Input name="value to calculate" value={toCalculate} onChange={changeHandler} />

        <p>{ calculated }</p>
      </div>
    </div>
  )
}

export default App
