import axios from "axios";

const base_url = 'http://127.0.0.1:8000';

// login api services

function LoginApiServices(credentials){

    return axios({
        method: 'post',
        url: base_url + '/api/accounts/login/',
        data: credentials
    })
};

export  {
    LoginApiServices, 
}