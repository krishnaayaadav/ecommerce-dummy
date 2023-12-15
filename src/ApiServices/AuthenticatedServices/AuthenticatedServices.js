import axios from "axios";

const base_url = 'http://127.0.0.1:8000';

function userDashbaordService(access_token){
    const auth_headers = {'Authorization': `Bearer ${access_token}`};
    return axios({
        method: 'get',
        url: base_url + '/api/accounts/dashboard/',
        headers: auth_headers

    })
};

export {
    userDashbaordService,
}
