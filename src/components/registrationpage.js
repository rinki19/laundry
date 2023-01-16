import React from 'react'
import {useForm} from 'react-hook-form'
import LoginPage  from './loginpage';
import './registrationpage.css'

function RegistrationPage() {
  const {register,handleSubmit, formState:{errors}} = useForm();

  

  const onSubmit = async event => {
    event.preventDefault()
    
    }
  
  return (
    <>
    <div class='registration-container'>
    <p className='title'>LMS || Registration Form</p>
    <form className='App' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Fullname' {...register("name")}/>
      <input type="email" placeholder='Email' {...register("email",{required: true})}/>
      {errors.email && <span style={{color:"red"}}>*Email is required</span>}
      <input type="phone"  placeholder="Phone" {...register("phone")}/>
      <input type="password" placeholder='Password' {...register("password")}/>
      <input type={"submit"} style={{backgroundColor:"#a1eafb"}}/>

    </form>
    <div className='element'>
      <p><a href='/login'>Login</a></p>
      <p><a href='/'>Forgot Password</a></p>
    </div>
    </div>
    </>
  )
}
export default RegistrationPage