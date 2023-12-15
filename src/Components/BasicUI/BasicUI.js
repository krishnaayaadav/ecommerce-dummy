import React from "react";

import SiteNavbar from "./SiteNavbar"; 
import SiteFooter from "./SiteFooter";
import LoginForm from "../Forms/LoginForm";

// for authenticated users
import UserDashboard from "../AuthenticatedUser/UserDashboard";
import MakeOrder from "../AuthenticatedUser/MakeOrder";

import { Routes, Route } from 'react-router-dom';
class BasicUI extends React.Component{

    constructor(props){
        super(); //calling parent constructor
    }

    render(){
        return(
            <div>
                <SiteNavbar />
                <div className="my-3 ">
                <Routes>
                    <Route path="user/accounts/login" element={ <LoginForm /> } />
                    <Route path="user/accounts/dashboard" element={ <UserDashboard /> } />
                    <Route path="user/make/new/order" element = { <MakeOrder /> } />
                </Routes>
                </div>


                <SiteFooter />
            </div>
        )
    }
};

export default BasicUI