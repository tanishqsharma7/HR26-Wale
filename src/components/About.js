import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);

    }


    render() {
        return (
            <div>
                <h1> About - Swiggy Clone</h1>
                <h2> Hi, From Tanishq</h2>
                <UserClass name={"Tanishq Sharma"} location={"Gurugram"}/>
            </div>
        );
    }
}



export default About;