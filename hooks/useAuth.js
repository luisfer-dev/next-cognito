import { Auth } from 'aws-amplify'

const useAuth = () => {
  const getUserData = () => {
    return Auth.currentAuthenticatedUser()
  }

  const signOut = () => {
    return Auth.signOut()
  }

  const signIn = ({ email, password }) => {
    return Auth.signIn(email, password)
  }

  const signUp = ({ username, password }) => {
    return Auth.signUp({ 
      username, 
      password, 
      autoSignIn: {
        enabled: false // Falso si el usuario tiene que verificar su correo
      }
    })
  }

  const verifyCode = ({ username, code }) => {
    return Auth.confirmSignUp(username, code)
  }

  return {
    getUserData,
    signIn,
    signOut,
    signUp,
    verifyCode
  }
}

export default useAuth
