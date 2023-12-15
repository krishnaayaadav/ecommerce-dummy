import React, { useEffect, useState } from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
import { userCheckoutService, makeNeworder, checkPaymentStatus } from '../../ApiServices/AuthenticatedServices/AuthenticatedServices';

// Import the package
import useRazorpay from "react-razorpay";


function MakeOrder(){

    const [amount, setAmount] = useState('');
    const [address_id, setAddressId] = useState('');
    const access_token = localStorage.getItem('access_token');
    
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState('');

    const [Razorpay] = useRazorpay();


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

                    // now open razorpay interface here
                    const options = {
                        key: "rzp_test_erbbgraFthyGLS", // Enter the Key ID generated from the Dashboard
                        amount: Number(amount * 100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "INR",
                        name: "krishna",
                        description: "Transaction in testing mode by krishna",
                        order_id: response.data.order_details.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                        handler: function (response) {
                          alert(response.razorpay_payment_id);
                          alert(response.razorpay_order_id);
                          alert(response.razorpay_signature);

                          console.log('\n razorpay response data \n ', {...response})
                          
                          // razorpay data after successfull payment
                          const payment_data = {
                            razorpay_order_id:      response.razorpay_order_id,
                            razorpay_signature_id:  response.razorpay_signature,
                            razorpay_payment_id:    response.razorpay_payment_id,
                            amount:                 amount

                          }
                        // const payment_data = {}
                          console.log('\n Congrats Payment done and signature and payment id is received \n', payment_data)


                          checkPaymentStatus(access_token, payment_data).then(response => {
                            if(response.status == 200){
                                console.log(response.data)
                            }
                          }, (errors) => {
                            console.log(errors.response.data)
                          } )
                        },
                       
                       
                      };
                    
                      const rzp1 = new Razorpay(options);
                    
                      rzp1.on("payment.failed", function (response) {
                        alert(response.error.code);
                        alert(response.error.description);
                        alert(response.error.source);
                        alert(response.error.step);
                        alert(response.error.reason);
                        alert(response.error.metadata.order_id);
                        alert(response.error.metadata.payment_id);
                      });
                    
                      rzp1.open();

                    

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

