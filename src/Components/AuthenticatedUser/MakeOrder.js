import React, { useEffect, useState } from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
import { userCheckoutService } from '../../ApiServices/AuthenticatedServices/AuthenticatedServices';

function MakeOrder(){
    const [amount, setAmount] = useState('');
    const [address_id, setAddressId] = useState('');
    const access_token = localStorage.getItem('access_token');


    useEffect( () => {
        userCheckoutService(access_token, 1).then( response => {
            if(response.status == 200){
                console.log(response.data)
                setAmount(response.data.total_price)
                setAddressId(response.data.delivery_address.id
                    )
            }
        },

        (errors) => {
            console.log(errors.response)
        }
        
        )

    }, [access_token] )

    console.log(amount, address_id)
    return(
        <div>

            <MDBCard className="col-sm-5 offset-3 my-5">
                <h3 className="my-5">Welcome on make new order page</h3>

                <MDBCardBody>
                    <MDBCardTitle>Total Price: {amount} </MDBCardTitle>
                    
                    <MDBBtn className="mt-5">Order Now</MDBBtn>
                </MDBCardBody>
            </MDBCard>

        </div>
    )
}

export default MakeOrder;

