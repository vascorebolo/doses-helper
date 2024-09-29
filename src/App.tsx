import { useEffect, useState } from 'react'
import Input from './components/Input/Input'
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
    console.log('needs to change calc');

    updateCalc()
  }, [original, desired, toCalculate]);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.target?.value
    const element = e.target?.id

    switch (element) {
      case "value to calculate":
        changeValue(value, "toCalculate")
        break

      case "intended":
        changeValue(value, 'desired')
        break

      default:
        changeValue(value, element)
        break
    }
  }


  return (
    <div>
      <header>cenas</header>
      <div>
        <input type="text" value={original} />
        <Input name="original" value={original} onChange={changeHandler} />
        <Input name="intended" value={desired} onChange={changeHandler} />
        <Input name="value to calculate" value={toCalculate} onChange={changeHandler} />

        <p>{ original }</p>

        <p>{ calculated }</p>

      </div>
    </div>
  )
}

export default App
