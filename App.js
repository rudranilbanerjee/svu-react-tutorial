import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//Component in react

// Types of component
// 1) Class based Component
// 2) Functional Component


// const Heading = ()=> <h1>Hello, Start your day</h1>;// react component
// inside react component i will render my react Element.
// render react component inside react Element
// const title = <span><Heading/></span>// react element

// when we put any elememnt inside a component then this process is called component composition.

// const data =<script>alert("hacked")</script>;// some details of user // but after hack i got this 


// JSX Auto escaping
// const Heading = ()=> <h1>{data}</h1>

// React component open and close tag

const Heading = ()=> <h1>Hello, Start your day</h1>;

const title = <span><Heading/></span>
const title1 = <span><Heading></Heading></span>
// there component called as open and closing tag
const title2 = <span>{Heading()}</span>
// there component called as a function invokation



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(title2);