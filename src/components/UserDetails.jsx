import React from "react";
class UserDetails extends React.Component{
    constructor(props){
        super(props);
        console.log("Child class first call")
    }

    componentDidMount(){
        console.log("Child class componentDidMount")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Child class componentDidUpdate", prevProps.count)
    }

    componentWillUnmount(){
        // when you want to close any event
        
    }

    render(){
       console.log("Child class second call")
        return <div>
            <p>Count: {this.props.count}</p>
            <h1>Name: {this.props.name}</h1>
            <p>Class: {this.props.class}</p>
        </div>
    }
}

export default UserDetails;

/**
 * Parent class first call
 * Parent class second call
 * Child class first call
 * Child class second call
 * Child class componentDidMount
 * Child class first call
 * Child class second call
 * Child class componentDidMount
 * Parent class componentDidMount
 */

/**
 * Parent class first call
 * Parent class second call
 * Child class first call
 * Child class second call
 * Child class first call
 * Child class second call
 * Child class componentDidMount
 * Child class componentDidMount
 * Parent class componentDidMount
 */