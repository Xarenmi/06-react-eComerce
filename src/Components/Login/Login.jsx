import { useForm } from 'react-hook-form'
import userService from '@/Service/userService'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './login.sass'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  let tempErrors = {}

  const validate = (data) => {
    // Check for email syntax
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if (!emailRegex.test(data.email)) {
      tempErrors.email = 'Email has invalid syntax.'
    }

    // Check for password length
    if (data.password.length < 8) {
      tempErrors.password = 'Password must be at least 8 characters long.'
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      if (!passwordRegex.test(data.password)) {
        tempErrors.password = 'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      }
    }

    if (data.first_name.length < 3) {
      tempErrors.first_name = 'Name must be at least 3 characters long.'
    }

    if (data.last_name.length < 3) {
      tempErrors.last_name = 'Name must be at least 3 characters long.'
    }

    // If there are any errors, set the errors state to the tempErrors object
    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors)
      return false
    }

    return true
  }

  const onSubmit = async (data) => {
    console.log('Form submitted:', data);

    if (!validate(data)) {
      return
    }

    try {
      const response = await userService.login(data)
      if (response.status === 200) {
        navigate('/')
        console.log('Login success')
        // login(response.data.token)
      } else {
        console.log('Login failed')
      }
    } catch (error) {
      console.error('Error at login:', error)
    }

    try {
      const registerResponse = await userService.register(data)
      if (registerResponse.status === 200) {
        console.log('Registration success')
      } else {
        console.log(data)
        console.log('Registration failed')
      }
    } catch (error) {
      console.error('Error at register:', error)
    }
  }

  return (
    <div className='form'>
      <form className='form__signin' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='h3 mb-3 fw-normal'>Please Sign in</h1>

        <div className='form-floating'>
          <label htmlFor='floatingFirstName'>First Name</label>
          <input
            type='text'
            className='form-control'
            name='first_name'
            id='floatingFirstName'
            placeholder='John'
            {...register('first_name')}
          />
          <p>{errors.first_name?.message}</p>
        </div>


        <div className='form-floating'>
          <label htmlFor='floatingLastName'></label>
          <input
            type='text'
            className='form-control'
            name='last_name'
            id='floatingLastName'
            placeholder='Doe'
            {...register('last_name')}
          />
          <p>{errors.last_name?.message}</p>

        </div>


        <div className='form-floating'>
          <label htmlFor='floatingInput'>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='floatingInput'
            placeholder='name@example.com'
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div className='form-floating'>
          <label htmlFor='floatingGender'>Gender</label>
          <select name="gender" id="floatingGender" {...register('gender')}>
            <option value="O">Other</option>
            <option value="M">Men</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className='form-floating'>
          <label htmlFor='floatingPassword'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='floatingPassword'
            placeholder='Password'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>
          Sign/Log in
        </button>
      </form>
    </div>
  )
}

export default Login