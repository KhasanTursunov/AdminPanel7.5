import React from 'react'
import { useLoginMutation } from '../../redux/api/auth.api'

const Login = () => {
    const [login, {}] = useLoginMutation()
    const handleLogin = event => {
        event.preventDefault()
        let formData = new FormData(event.target)
        let data = Object.fromEntries(formData)
        
        login(data)
            .unwrap()
            .then(res => {
                console.log(res)
            })

        // event.target.reset()
        
    }
  return (
    <div>
      <form onSubmit={handleLogin} action="">
        <input className="border" type="text" name='username' />
        <input className="border" type="password" name='password' />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login