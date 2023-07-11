const parent = React.createElement(
    "div", 
    {id :"parent"},
    [React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1",{},"I am an h1 tag") ,
        React.createElement("h2",{},"I am an h2 tag")
    ]),
    React.createElement(
        "div",
        {id : "child2"},
        [React.createElement("h1",{},"I am an h1 tag") ,
        React.createElement("h2",{},"I am an h2 tag")
    ])
]);

//JSX can do this better than above written code



// const heading = React.createElement(
//     "h1" ,
//     {id : "heading", xyz: "abc"},
//     "Hello World from React Inside!"
//     );

// console.log(heading)        //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
