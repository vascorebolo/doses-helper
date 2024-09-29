import { create } from 'zustand'

interface DoseHelperState {
  original: number | undefined
  desired: number | undefined
  toCalculate: number | undefined
  calculated: number | undefined
  changeValue: (value: number, name: string) => void
  updateCalc: () => void
}

const useDoseHelperStore = create<DoseHelperState>((set) => ({
  original: 0,
  desired: 0,
  toCalculate: 0,
  calculated: 0,
  changeValue: (value: number, name: string) =>
    set((state) => ({ ...state, [name]: value })),
  updateCalc: () => {
    set((state) => {
      const { original, desired, toCalculate } = state

      if (original && desired && toCalculate) {
        return {...state, calculated: toCalculate * desired / original }
      }

      return {...state, calculated: undefined}
    })
  }
}))

export default useDoseHelperStore