import React from 'react';
import Person from './Person';

const PersonList = (props) => {
  return (
    <div>
      {props.persons.map(person => (   
        <Person 
          key={person.id}
          person={person}  
          onDelete={() => props.onDelete(person.id)}  
        />  
      ))}   
    </div> 
  );
}

export default PersonList;
