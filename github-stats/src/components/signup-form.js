import { useState } from "react";
import { useAuth } from "../context/services-context";
// import { createUser } from "../services/user-services";
import Input from "./input";


export function SignUpForm() {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  })
  const {email, password, first_name, last_name} = formData

  const {signup} = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    // createUser(formData).then(console.log).catch(console.log)
    signup(formData);

  }

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  return(
    <div>
      <div>Sign Up</div>
      <form>
        <Input
        label="Email"
        name="email"
        type="email"
        value={email}
        placeholder="example@email.com"
        onChange={handleChange}
        />
        <Input
        label="Password"
        name="password"
        type="password"
        value={password}
        placeholder="******"
        onChange={handleChange}
        />
        <Input
        label="First Name"
        name="first_name"
        type="text"
        value={first_name}
        placeholder="your first name"
        onChange={handleChange}
        />
        <Input
        label="Last Name"
        name="last_name"
        type="text"
        value={last_name}
        placeholder="your last name"
        onChange={handleChange}
        />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  )
  
}


