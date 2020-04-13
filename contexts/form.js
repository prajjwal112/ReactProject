import { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export function configureForm (formName) {
  const useInput = inputName => {
    const [value, setValue] = useState('')
    const onChange = useContext(FormContext)

    const handleChange = ({ target }) => {
      setValue(target.value)
      onChange(formName, inputName, target.value)
    }

    return [value, handleChange]
  }

  return { useInput }
}

export default FormContext
