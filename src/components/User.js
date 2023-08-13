import { useState } from "react";

const User = () =>{

    const [count] = useState(0);

    return ( 
        <div className="user-card">
            <h1>count = {count}</h1>
            <h2> Name : Tanishq Sharma</h2>
            <h3>Location : Gurgaon</h3>
            <h4> Contact : itstanishq6161@gmail.com</h4>
        </div>
    );
};

export default User;