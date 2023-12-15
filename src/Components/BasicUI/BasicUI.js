import React from "react";

import SiteNavbar from "../MainComponents/SiteNavbar";
import SiteFooter from "../MainComponents/SiteFooter";
class BasicUI extends React.Component{

    constructor(props){
        super(); //calling parent constructor
    }

    render(){
        return(
            <div>
                <SiteNavbar />
                <SiteFooter />
                
            </div>
        )
    }
};

export default BasicUI