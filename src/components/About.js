import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);

    }


    render() {
        return (
            <div className="p-4">
                <h1 className="font-bold text-center text-2xl"> About - HR26 WALE</h1>
                <h2> Hi, From Tanishq</h2>
                <p className="my-8">So basically, HR26 WALE is a kind of Swiggy Clone that uses Swiggy's live API to display restaurants and different cafe options available for people in Gurugram.
                I myself am from Gurugram so am was eager to built such kind of website. Find more about us by contacting us :-)</p>
                <UserClass name={"Tanishq Sharma"} location={"Gurugram"}/>
            </div>
        );
    }
}



export default About;