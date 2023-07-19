
import React from "react";
import ReactDOM from "react-dom/client";


const title = () => (
    <h1 className="head" tabIndex="5">
        Nameste React using JSX
    </h1>
);
const number = 1000;

//React Components
const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);

const root =  ReactDOM.createRoot(document.getElementById("root"));

root . render(<HeadingComponent />);