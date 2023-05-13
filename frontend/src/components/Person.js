import React from 'react';
import App from '../App';

const Person = (props) => {
  return (       
    <div className="person">
      <h3>{props.person.name}</h3>
      <p>Age: {props.person.age}</p>      
      <button onClick={props.onDelete}>Delete</button>     
      <button onClick={() => props.deletePerson(props.person.id)}>Delete</button>  
      <button onClick={() => props.showUpdateForm(props.person)}>
  Update   
</button>
       </div>   

  )
}

export default Person;
