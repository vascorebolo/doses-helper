import { create } from 'zustand'

interface DoseHelperState {
  original: number | null
  desired: number | null
  toCalculate: number | null
  calculated: number | null
  isTm6: boolean
  changeValue: (value: number, name: string) => void
  changeModel: (value: boolean) => void
  updateCalc: () => void
}

const useDoseHelperStore = create<DoseHelperState>((set) => ({
  original: null,
  desired: null,
  toCalculate: null,
  calculated: null,
  isTm6: false,
  changeValue: (value: number, name: string) =>
    set((state) => ({ ...state, [name]: value ? value : null })),
  updateCalc: () => {
    set((state) => {
      const { original, desired, toCalculate } = state

      if (original && desired && toCalculate) {
        console.log(((toCalculate * desired) / original) % 5)
        const calc = Math.round(toCalculate * desired / original)
        let calculated = calc

        if (!state.isTm6) { // nees to round to 5
          if (calc < 5 && calc > 0) {
            calculated = 5
          } else if (calc % 5 !== 0) {
            const remainder = calc % 10

            calculated = remainder > 5
              ? calc + (10 - remainder)
              : calc - remainder
          }
        }

        return {...state, calculated  }
      }

      return {...state, calculated: null}
    })
  },
  changeModel: (value) => set((state) => ({...state, isTm6: value}))
}))

export default useDoseHelperStore