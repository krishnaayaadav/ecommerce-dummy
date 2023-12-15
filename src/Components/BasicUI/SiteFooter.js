import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

import './SiteFooter.css';

export default function SiteFooter() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left myfooter'>
      

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href=''>
          Kreomart.com designed by Krishna Yadav
        </a>
      </div>
    </MDBFooter>
  );
}