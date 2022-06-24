import { useEffect, useState } from 'react';
import AnAuthenticatedApp from './anAunthetincatedApp';
import './App.css';
import AuthenticatedApp from './authenticatedApp';
import { login } from './services/session-services';
import { createUser, getUser } from './services/user-services';
function App() {
  /**
   * this state was create to know if the user exist or not when execute the app
   * for that, we going to use useffect
   */
  const [user, setUser] = useState(null)
  
  /**despues que se ejecuta la función app, si es que las credenciales son correctas
   * useeffect traerá al usuario actual y lo seterará en user
   */
  useEffect(()=>{
    getUser().then(setUser).catch(console.log)
  }, [])

  /**Las instrucciones que se seguiran cuando se haga login */
  function handleLogin(credentials) {
    login(credentials).then(setUser).catch(console.log)
  }

  function handleSignUp(userData) {
    createUser(userData).then(setUser).catch(console.log)
  }


  return (
    user ? <AuthenticatedApp/> : <AnAuthenticatedApp onLogin={handleLogin} onSignUp={handleSignUp}/>
  )


}
export default App;
