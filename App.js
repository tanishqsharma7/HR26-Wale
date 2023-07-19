
import React from "react";
import ReactDOM from "react-dom/client";

//React Element => Object => HTML Element (after rendering)

// const heading =React.createElement("h1",
// {id : "heading"},
// "Namaste React");
// console.log(heading);


//JSX React - HTML like syntax
//JSX code is transpiled before it reaches the JS engine by parcel(babel).
//JSX => React.createelement => Reacr Element => Js object => HTML element


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