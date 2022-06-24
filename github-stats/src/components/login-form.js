import { useState } from "react";
// import { login } from "../services/session-services";
import Input from "./input"; 



export function LoginForm({onLogin}) {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const [user, setUser] = useState(null)
  const { email, password } = formData;
  
  function handleSubmit(event){
    event.preventDefault();
    // console.log({formData})
    // login(formData)
    onLogin(formData)
    
  }

  function handleChange(event) {
    const {name, value} = event.target
    setFormData({...formData, [name]: value});
  }
  return (
    <div>
      <form onClick={handleSubmit}>
         <Input
         label="email: "
          name="email"
          type="email"
          value={email}
          placeholder="email@email.com"
          onChange={handleChange}
        />
        <Input
        label="password: "
        name="password"
        type="password"
        value={password}
        placeholder="********"
        onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  )
}