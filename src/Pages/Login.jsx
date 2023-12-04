import React, { useState } from 'react';
import AuthForm from '../Components/AuthForm';

function Login() {
    
    const[formData, setFormData]= useState({
        'email': '',
        'password': '',
    })

    function handleSubmit(e){
        alert(`User has logged in - email: ${formData.email}, password: ${formData.password}`);
        e.preventDefault()
    }

    function handleChange(e){
        console.log(e.target.value)
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

  return (
    <div>
        <AuthForm
            formData={formData}
            buttonType='Login'
            handleChange={handleChange}
            handleSubmit ={handleSubmit}
        />
    </div>
  )
}

export default Login