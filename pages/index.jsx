import Head from 'next/head'

import { TabsContainer } from 'components/TabsContainer'
import { User } from 'components/User'
import { useAuthEvents } from 'hooks/useAuthEvents'

export default function Home() {
  const { userData } = useAuthEvents()

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next - Cognito</title>
      </Head>

      <main>
        <h1>Next - Aws Cognito</h1>
        {!userData && <TabsContainer />}
        {userData && <User data={userData} />}
      </main>
    </>
  )
}
