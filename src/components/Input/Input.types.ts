export default interface InputProps {
  name: string
  label?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: number | null | undefined
}
