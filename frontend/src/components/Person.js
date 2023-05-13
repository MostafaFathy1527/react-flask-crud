import React from 'react';

const Person = (props) => {
  return (       
    <div className="person">
      <h3>{props.person.name}</h3>
      <p>Age: {props.person.age}</p>      
      <button onClick={props.onDelete}>Delete</button>      
    </div>    
  )
}

export default Person;