import React from 'react'
import { useFormStatus } from "react-dom";
// Hey you, add comments to the code so I undertand the logic. xoxo
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