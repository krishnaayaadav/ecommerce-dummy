import React from "react";

import SiteNavbar from "../MainComponents/SiteNavbar";
import SiteFooter from "../MainComponents/SiteFooter";
import LoginForm from "../Forms/LoginForm";

import { Routes, Route } from 'react-router-dom';
class BasicUI extends React.Component{

    constructor(props){
        super(); //calling parent constructor
    }

    render(){
        return(
            <div>
                <SiteNavbar />
                
                <Routes>
                    <Route path="user/accounts/login" element={ <LoginForm /> } />
                </Routes>


                <SiteFooter />
            </div>
        )
    }
};

export default BasicUI