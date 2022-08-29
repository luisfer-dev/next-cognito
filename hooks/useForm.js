import { useState } from 'react'

export const useForm = (defaultData) => {
  const [formData, setFormData] = useState(defaultData)

  const resetForm = () => setFormData(defaultData)

  const updateState = (key, newValue) => {
    setFormData({ ...formData, [key]: newValue })
  }

  const onInputChange = ({ target }) => {
    const { id, value } = target
    updateState(id, value)
  }

  return {
    formData,
    onInputChange,
    updateState,
    resetForm
  }
}
