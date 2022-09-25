import { useState } from "react"

const useForm = (state) => {
  const [form, setForm] = useState(state)
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setForm(state)
  }

  return [form, handleChange, reset];
}

export default useForm;