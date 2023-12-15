import axios from "axios";

const base_url = 'http://127.0.0.1:8000';

// get users dashboard
function userDashbaordService(access_token){
    const auth_headers = {'Authorization': `Bearer ${access_token}`};
    return axios({
        method: 'get',
        url: base_url + '/api/accounts/dashboard/',
        headers: auth_headers

    })
};


// make new order
function makeNeworder(access_token, amount, address){
    const auth_headers = {'Authorization': `Bearer ${access_token}`};

    return axios({
        method: 'post', 
        data: {
            amount: amount,
            address_id: address
                },
        url: base_url + '/api/order/make/order/',
        headers: auth_headers,
        

    })
};

// checkout api services
function userCheckoutService(access_token, address_id){
    const auth_headers = {'Authorization': `Bearer ${access_token}`};

    return axios({
        method: 'post', 
        url: base_url + `/api/buy/products/checkout/${address_id}/`,
        headers: auth_headers,
        

    })

};

// check payment status
function checkPaymentStatus(access_token, payment_data){
    return axios({
        method: 'post',
        url: base_url + '/api/order/confirm/order/',
        data: payment_data
    })
}
export {
    userDashbaordService, // user dashboard api
    makeNeworder,         // make new order api
    userCheckoutService,  // checkout api 
    checkPaymentStatus    // check payment status api
}
