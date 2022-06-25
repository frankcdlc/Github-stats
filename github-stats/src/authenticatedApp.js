import React from 'react'
import { useAuth } from './context/services-context'

function AuthenticatedApp(){

  const {logout} = useAuth();

  return (
    <div>
      <button onClick={logout} >
        Logout
      </button>
      <div>Content to authenticatedApp</div>
    </div>
  )
}

export default AuthenticatedApp