import React, { useEffect, useState } from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
import { userCheckoutService, makeNeworder } from '../../ApiServices/AuthenticatedServices/AuthenticatedServices';

function MakeOrder(){
    const [amount, setAmount] = useState('');
    const [address_id, setAddressId] = useState('');
    const access_token = localStorage.getItem('access_token');
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState('');

    // making request to checkout api
    useEffect( () => {
        userCheckoutService(access_token, 1).then( response => {
            if(response.status == 200){
                // console.log(response.data)
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

    // to create new order
    function createNewOrder(){
        if (amount >= 1 && address_id){
            console.log('\n... Creating new Order ID')
            // then make new order using api
            makeNeworder(access_token, amount, address_id).then( response => {
                if(response.status == 200){
                    console.log('\n...Congrats Order is created \n')
                    console.log(response.data.order_details)
                    setOrderDetails(response.data.order_details)
                    setOrderId(orderDetails.id ? orderDetails.id :  '')
                    

                }
            },
            (errors) => {
                console.log('\n...Soory Order creation is failed \n')

                console.log(errors.response)
            }  )





        }else{
            console.log('Amount and Address id is required')
            return
        }
        
    }

    console.log(orderDetails.id)
    return(
        <div>

            <MDBCard className="col-sm-5 offset-3 my-5">
                <h3 className="my-5">Welcome on make new order page</h3>

                <MDBCardBody>
                    <MDBCardTitle>Total Price: {amount} </MDBCardTitle>
                    
                    <MDBBtn className="mt-5" onClick={createNewOrder}>Order Now</MDBBtn>
                </MDBCardBody>
            </MDBCard>

        </div>
    )
}

export default MakeOrder;

