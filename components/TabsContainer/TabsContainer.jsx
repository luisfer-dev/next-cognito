import { useState } from 'react'
import { Stack, Tab, Tabs } from '@mui/material'
import { FormSignIn } from '../Form/FormSignIn'
import { FormSignUp } from '../Form/FormSignUp'

export const TabsContainer = () => {
  const [tab, setTab] = useState('signIn')
  const onTabChange = (event, newValue) => setTab(newValue)

  return (
    <Stack
      sx={{ width: '30ch' }}
      spacing={2}
    >
      <Tabs
        value={tab}
        onChange={onTabChange}
      >
        <Tab value="signIn" label="signIn" />
        <Tab value="signUp" label="signUp" />
      </Tabs>

      { tab === 'signIn' && <FormSignIn /> }
      { tab === 'signUp' && <FormSignUp /> }
    </Stack>
  )
}
