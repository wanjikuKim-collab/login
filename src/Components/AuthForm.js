import React from 'react'
import { useFormStatus } from "react-dom";

function AuthForm({formData, buttonType, handleChange, handleSubmit}) {
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                name='email'
                value={formData.email}
                type= 'text'
                onChange={handleChange}
                placeholder='Enter your email'
                className='' />
            <input
                name='password'
                value={formData.password}
                type= 'password' 
                placeholder='Password'
                onChange={handleChange}
                className=''/>
            <button type='submit'>
              {buttonType}
            </button>
        </form>
    </div>
  )
}

export default AuthForm