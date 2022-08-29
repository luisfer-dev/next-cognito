import { TextField, Stack } from '@mui/material'
import { useFormSignUp } from 'hooks/useFormSignUp'

export const FormSignUp = () => {  
  const { formData, onFormSubmit, onInputChange } = useFormSignUp()

  return (
    <Stack
      spacing={2}
      noValidate
      autoComplete='off'
    >
      <TextField
        label='Email' 
        id='email'
        variant='filled'
        value={formData.email}
        onChange={onInputChange}
        disabled={formData.isLoading || formData.isEnableCode}
      />

      {!formData.isEnableCode && (
        <TextField
          id='password'
          label='Password'
          variant='filled'
          type='password'
          value={formData.password}
          onChange={onInputChange}
          disabled={formData.isLoading || formData.isEnableCode}
        />
      )}

      {formData.isEnableCode && (
        <TextField
          id='codeConfirmation'
          label='Code'
          variant='filled'
          value={formData.codeConfirmation}
          onChange={onInputChange}
          disabled={formData.isLoading}
        />
      )}

      <button
        disabled={formData.isLoading}
        onClick={onFormSubmit}
      >
        {formData.isEnableCode ? 'Verify code' : 'SignUp'}
      </button>
    </Stack>
  )
}
