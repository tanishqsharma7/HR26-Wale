//class based component
import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count :0,
        };
    }

    render(){
        const {name}= this.props;
        return(
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({count : this.state.count +1});

                }}> Count Increase</button>
                <h2>Name : {name}</h2>
                <h3> Location : Gurgaon</h3>
                <h4> COntact : itstanishq6161@gmail.com</h4>
            </div>
        );
    }

}

export default UserClass;