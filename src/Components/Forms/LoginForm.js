import React, {useState, useEffect} from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

import './LoginForm.css';
import { LoginApiServices } from '../../ApiServices/NonAuthServices/LoginApiSerives';

export default function LoginForm() {
  const [email, setEmail] = useState('krishna777@gmail.com');
  const [emailError, setEmailError] = useState('');
 
  const [password, setPassword] = useState('Krishna777');
  const [passwordError, setPasswordError] = useState('');

  const [nonFieldErrors, setNonFieldErrors] = useState('');
  const [successMsg, setSuccessMsg] = useState('');


  
  // login form handler 
  const loginSubmitHandler  = (e) => {
    e.preventDefault(); 

    let credentials = {
      email: email,
      password: password
    }

    // making request to login api
    LoginApiServices(credentials).then( response => {
      // if login success here
      if(response.status == 200){
        let {msg, tokens} = response.data;
        
        // storing access token in localstorage
        localStorage.clear()
        localStorage.setItem('access_token', tokens.access_token)
        localStorage.setItem('refresh_token', tokens.refresh_token)

        setSuccessMsg(msg)
        setEmail('');
        setPassword('')
      }
    },
     // handling errors
    (errors) => {
      console.log(errors.response.data)

      // password errors
      if(errors.response.data.password){
        setPasswordError(errors.response.data.password[0])
        // console.log(errors.response.password);
      }else{
        setPasswordError('')
      }

      // email errors
      if(errors.response.data.email){
        setEmailError(errors.response.data.email[0])

      }else{
        setEmailError('')
      }

      // non field errors
      if(errors.response.data.non_field_errors){
        setNonFieldErrors(errors.response.data.non_field_errors)
      }else{
        setNonFieldErrors('')
      }
    }
    
    )


  }

  
  return (
    <div className='col-sm-5 centre offset-4 my-5'>
      <form onSubmit={loginSubmitHandler}>
        <h2>Welcome back! login now...</h2>
        <div className='text-center my-5'>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn floating color="secondary" className='mx-1'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
        

        <p className= { nonFieldErrors ? 'form-errors': 'errors'} >{nonFieldErrors} </p>
        <p className= { successMsg ? 'form-success': 'errors'} >{successMsg} </p>


        <MDBInput className='mb-4' type='email'    value={email}    onChange={ (e) => {setEmail(e.target.value)} } label='Email address' />
        <p className={ emailError ? 'form-errors' : 'errors' }>{emailError} </p>

        <MDBInput className='mb-4' type='password' value={password}  onChange={ (e) => {setPassword(e.target.value)} } label='Password' />
        <p className={ passwordError ? 'form-errors' : 'errors'}>{passwordError} </p>


        <MDBRow className='mb-4'>
          <MDBCol className='d-flex justify-content-center'>
            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
          </MDBCol>
          <MDBCol>
            <a href='#!'>Forgot password?</a>
          </MDBCol>
        </MDBRow>

        

        <MDBBtn type='submit' className='mb-4' block>
          Sign in
        </MDBBtn>
        <p>
            Not a member? <a href='#!'>Register</a>
          </p>

        
      </form>
    </div>
  );
}