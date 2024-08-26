import { useState } from "react"



const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loggedIn = () => {
        setIsLoggedIn(true);
    }
    
    const loggedOut = () => {
        setIsLoggedIn(false);
    }


  return (
    <div>
      <button onClick={loggedIn}>Log in</button>
      <button onClick={loggedOut}>Log out</button>
      <div>User is {isLoggedIn ? `logged in` : `logged out`}</div>
    </div>
  )
}

export default LoggedIn
