import React, { useEffect } from 'react'
import Input  from '@components/Input'
import Toggle from '@components/Toggle'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import useDoseHelperStore from './state/state'

function App() {
  const original = useDoseHelperStore((state) => state.original)
  const desired = useDoseHelperStore((state) => state.desired)
  const toCalculate = useDoseHelperStore((state) => state.toCalculate)
  const calculated = useDoseHelperStore((state) => state.calculated)
  const isTm6 = useDoseHelperStore((state) => state.isTm6)
  const changeValue = useDoseHelperStore((state) => state.changeValue)
  const updateCalc = useDoseHelperStore((state) => state.updateCalc)
  const changeModel = useDoseHelperStore((state) => state.changeModel)

  useEffect(() => {
    updateCalc()
  }, [original, desired, toCalculate, isTm6]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      const { value, id } = e.target
      changeValue(Number(value), id)
    }
  }

  const modelChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeModel(!!e.target.checked)
  }


  return (
    <div className="flex justify-center flex-col items-center min-h-full">
      <header className="mb-10 mt-20 text-5xl text-green-800">Doseador</header>
      <div className="mb-10">
        <Toggle
          value={isTm6}
          name="model"
          labels={{ left: 'tm5', right: 'tm6' }}
          onChange={modelChangeHandler}
        />
      </div>
      <div className="max-w-7xl space-y-6">
        <Input
          name="original"
          value={original}
          onChange={changeHandler}
          label="Quantidade Base (gr)"
        />
        <Input
          name="desired"
          value={desired}
          onChange={changeHandler}
          label="Quantidade Usada (gr)"
        />
        <Input
          name="toCalculate"
          value={toCalculate}
          onChange={changeHandler}
          label="Quantidade a Calcular (gr)"
        />

        <div>
          <p className="text-center pt-5 pb-1 text-gray-500">Valor calculado</p>
          <p className="text-green-700 text-5xl px-3 py-2 text-center">
            { calculated && calculated > 0 ? `${calculated}gr` : '-' }
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
