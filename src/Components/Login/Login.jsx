import React from 'react'
import './login.sass'

const Login = () => {
  return (
    <main className='form'>
      <form className="form__signin">
        <h1 className="fw-normal">Please sign in</h1>

        <div>
        <label htmlFor="floatingInput">Email address</label>
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          
        </div>
        <div>
        <label htmlFor="floatingPassword">Password</label>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />  
        </div>

        <div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </div>
      </form>
    </main>
  )
}

export default Login