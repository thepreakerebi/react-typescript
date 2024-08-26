import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}



const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)

    const loggedIn = () => {
        setUser({
            name: 'John',
            email: 'john@gmail.com'
        })
    }
    
    const loggedOut = () => {
        setUser(null);
    }


  return (
    <div>
      <button onClick={loggedIn}>Log in</button>
      <button onClick={loggedOut}>Log out</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  )
}

export default User
