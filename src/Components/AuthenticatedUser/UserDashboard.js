import React, {useState, useEffect} from "react";

import { userDashbaordService, checkPaymentStatus  } from '../../ApiServices/AuthenticatedServices/AuthenticatedServices';

function UserDashboard(){
    const [isAuthenticated, setAuthentication] = useState(false);
    const [authMsg, setAuthMsg]                = useState('You are not authenticated user. Please authenticate your self')

    const access_token = localStorage.getItem('access_token');

    useEffect( ()=> {
        userDashbaordService(access_token).then( response => {
            if(response.status == 200){
                console.log(response.data)
                setAuthMsg(response.data.msg)
                setAuthentication(true)
            }
        }, 
        (errors) => {
            console.log(errors.response)
        }
        )


    }, [access_token])
   

    return(
        <div className="my-5">
            <h3 className='my-4'>{authMsg} </h3>
        </div>
    )
}

export default UserDashboard;