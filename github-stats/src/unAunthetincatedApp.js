import { useState } from 'react';
import { LoginForm } from './components/login-form';
import { SignUpForm } from './components/signup-form';


function UnAuthenticatedApp({onLogin, onSignUp }) {
  const [showLogin, setShowLogin] = useState(true);

  function handleClick(e) {
    e.preventDefault();
    setShowLogin(!showLogin);
    
  }

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? <LoginForm/> : <SignUpForm/>}
      <button onClick={handleClick} >{showLogin ? "SignUp" : "Login"}</button>
    </div>
  )
}

export default UnAuthenticatedApp