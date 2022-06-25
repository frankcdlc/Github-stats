import './App.css';
import AuthenticatedApp from './authenticatedApp';

import { useAuth } from './context/services-context';

import UnAuthenticatedApp from './unAunthetincatedApp';
function App() {

  const {user} = useAuth()

  return (
    user ? <AuthenticatedApp/> : <UnAuthenticatedApp/>
  )


}
export default App;
