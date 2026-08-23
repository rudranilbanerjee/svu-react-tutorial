import React from "react";
import ReactDOM from "react-dom/client";

// const main = React.createElement('div',
//     {
//         id:"parent",
//     },
//     [React.createElement("div",{id:"child"},
//         [React.createElement("h1",
//             {

//             },
//             "I am H1 Tag"
//         ),
//         React.createElement("h2",
//             {

//             },
//             "I am H2 Tag"
//         )]

//     ),
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",
//             {

//             },
//             "I am H1 Tag"
//         ),React.createElement("h2",
//             {

//             },
//             "I am H2 Tag"
//         )]

//     )]
// );

//JSX
const main = React.createElement(
    "div",
    {id:"parent"},
    "Hi i am React")
console.log(main)
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(main);  