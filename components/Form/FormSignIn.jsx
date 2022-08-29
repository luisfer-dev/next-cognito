import { TextField, Stack } from '@mui/material'
import useAuth from 'hooks/useAuth'
import { useForm } from 'hooks/useForm'

const FormData = {
  email: '',
  password: ''
}

export const FormSignIn = () => {
  const { signIn } = useAuth()
  const { formData, onInputChange } = useForm(FormData)

  const handleSubmit = () => signIn(formData)

  return (
    <Stack
      sx={{ width: '30ch' }}
      spacing={2}
    >
      <TextField
        id='email'
        label='Email'
        variant='filled'
        value={formData.email}
        onChange={onInputChange}
      />

      <TextField
        id='password'
        label='Password'
        variant='filled'
        type='password'
        value={formData.password}
        onChange={onInputChange}
      />

      <button
        onClick={handleSubmit}
      >
        SignIn
      </button>
    </Stack>
  )
}
