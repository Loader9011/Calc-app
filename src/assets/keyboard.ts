const numbers = [1,2,3,4,5,6,7,8,9,0]


export const Backspace = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>): void => {
    setValue(value.substring(0, value.length - 1))
  } 


export const handleKeyDown = (value: string, setValue: React.Dispatch<React.SetStateAction<string>>, Backspace: Function, event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
     Backspace()
    }
    
  };

