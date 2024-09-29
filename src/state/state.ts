import { create } from 'zustand'

interface DoseHelperState {
  original: number | null
  desired: number | null
  toCalculate: number | null
  calculated: number | null
  tm6: boolean
  changeValue: (value: number, name: string) => void
  updateCalc: () => void
}

const useDoseHelperStore = create<DoseHelperState>((set) => ({
  original: null,
  desired: null,
  toCalculate: null,
  calculated: null,
  tm6: false,
  changeValue: (value: number, name: string) =>
    set((state) => ({ ...state, [name]: value })),
  updateCalc: () => {
    set((state) => {
      const { original, desired, toCalculate } = state

      if (original && desired && toCalculate) {
        const calculated = Math.round(toCalculate * desired / original)
        return {...state, calculated  }
      }

      return {...state, calculated: null}
    })
  }
}))

export default useDoseHelperStore