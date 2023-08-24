//class based component
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name : "Dummy",
                location : "default",
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/tanishqsharma7");
        const json = await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;

        return(
            <div className="user-card w-72 mx-4 bg-slate-300">
                <h1 className="font-bold text-center p-4 text-lg">GitHub</h1>
                <img src={avatar_url}></img>
                <h2 className="mx-3">Name : {name}</h2>
                <h3 className="mx-3"> Location : {location}</h3>
                <h4 className="mx-3"> Contact : itstanishq6161@gmail.com</h4>
            </div>
        );
    }

}

export default UserClass;