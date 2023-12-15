import React from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function LoginForm() {
  return (
    <div className='col-sm-5 centre offset-4 my-5'>
      <form>
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
        


        <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
        <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

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