import React from "react";
import ReactDOM from "react-dom/client";


// React.createElement ==> Js Object => HTML Element
const heading = React.createElement("h1",{id:"heading"},"Hello From React");
console.log("heading",heading);

// JSX => Javascript XML
// its look like a html or xml but its not html or xml its a javascript object
const jsxHeading = <h1 id="heading" tabIndex="1" className="abcd">
    <span>Hello From JSX</span>
<p>Hello From Paragraph</p>
</h1>;
// Parcel==> babel==> React.createElement ==> JS Object => HTML Element
console.log("jsxHeading",jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(jsxHeading);