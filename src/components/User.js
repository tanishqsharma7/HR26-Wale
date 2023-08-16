import { useEffect, useState } from "react";

const User = () =>{

    const [count] = useState(0);

    useEffect(()=>{

    },[]);

    
    return ( 
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h1>count = {count}</h1>
            <h2> Name : Tanishq Sharma</h2>
            <h3>Location : Gurgaon</h3>
            <h4> Contact : itstanishq6161@gmail.com</h4>
        </div>
    );
};

export default User;