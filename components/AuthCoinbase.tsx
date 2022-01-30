import { useSession, signIn, signOut } from "next-auth/react"

export const AuthCoinbase = () => {
  const { data: session } = useSession()

  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="btn btn-warning" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button className="btn btn-primary" onClick={() => signIn('coinbase', {callbackUrl: 'http://localhost:3000/dashboard'})}>Sign in with Coinbase</button>
    </>
  )
}