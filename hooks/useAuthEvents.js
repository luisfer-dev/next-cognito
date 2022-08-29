import { useEffect, useState } from 'react'
import { Hub } from 'aws-amplify'
import useAuth from 'hooks/useAuth'

export const useAuthEvents = () => {
  const [userData, setUserData] = useState(null)
  const { getUserData } = useAuth()

  const updateData = () => {
    getUserData().then(({ attributes }) => {
      setUserData(attributes)
    })
  }

  Hub.listen('auth', ({ payload }) => {
    switch (payload.event) {
      case 'signIn':
        updateData()
        break
      case 'signUp':
        updateData()
        break
      case 'signOut':
        setUserData(null)
        break
    }
  })

  useEffect(updateData, [])

  return {
    userData
  }
}
