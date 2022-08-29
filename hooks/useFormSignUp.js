import useAuth from 'hooks/useAuth'
import { useForm } from 'hooks/useForm'

const FormData = {
  email: '',
  password: '',
  codeConfirmation: '',
  isLoading: false,
  isEnableCode: false
}

export const useFormSignUp = () => {
  const { signIn, signUp, verifyCode } = useAuth()
  const { formData, onInputChange, updateState } = useForm(FormData)

  const onFormSubmit = () => {
    if (formData.isEnableCode) {
      handleVerifyCode()
      return
    }

    handleSignUp()
  }

  const handleSignUp = () => {
    const data = { 
      username: formData.email, 
      password: formData.password 
    }

    signUp(data).then(() => {
      updateState('isEnableCode', true)
    })
  }

  const handleVerifyCode = () => {
    const data = { 
      username: formData.email, 
      code: formData.codeConfirmation 
    }

    verifyCode(data).then(() => {
      // Auto inicio de sesion al confirmar codigo
      initSignIn()
    })
  }

  const initSignIn = () => signIn(formData)

  return {
    formData,
    onInputChange,
    onFormSubmit
  }
}
