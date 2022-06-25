import React from 'react'
import { useAuth } from './context/services-context'
import SearchPage from './pages/search-page';

function AuthenticatedApp(){

  const {logout} = useAuth();

  return (
    <div>
      <button onClick={logout} >
        Logout
      </button>
      <div>
        <SearchPage/>
      </div>
    </div>
  )
}

export default AuthenticatedApp