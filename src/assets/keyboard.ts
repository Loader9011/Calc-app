import { BaseSyntheticEvent } from "react"


export const Backspace = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>): void => {
    setValue(value.substring(0, value.length - 1))
  } 

export const typeNumber = (e : BaseSyntheticEvent, setValue: Function, value: string) => {
    e.preventDefault()
    setValue(value.concat(e.currentTarget.value))
  }

export const handleKeyDown = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>, Backspace: Function, event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
     Backspace()
    }
  };

