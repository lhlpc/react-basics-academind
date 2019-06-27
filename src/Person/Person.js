 import React from 'react';
  
 const person = (props) => {
    return (
        <div>
            <p>My name is {props.name}</p>
            <p>I am {props.age} year old</p>
            <p>{props.children}</p>
        </div>
    );
 };

 export default person;