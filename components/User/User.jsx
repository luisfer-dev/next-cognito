import useAuth from 'hooks/useAuth'

export const User = ({ data }) => {
  const { signOut } = useAuth()

  return (
    <div>
      <h3>Hi { data.email }</h3>
      <button onClick={signOut}>
        Sign out
      </button>
    </div>
  )
}
