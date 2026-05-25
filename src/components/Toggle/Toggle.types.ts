import React from 'react'

export interface ToggleProps {
  value: boolean
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  labels?: ToggleLabels
}

export interface ToggleInputProps {
  checked: boolean
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ToggleLabels {
  left?: string
  right?: string
}
