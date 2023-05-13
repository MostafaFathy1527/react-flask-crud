import React, { Component } from 'react';

import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import UpdateForm from './components/UpdateForm'
import Person from './components/Person';


class App extends Component {
  state = { 
    persons: [] 
   }

  componentDidMount() {
    this.getPersons();
  }

getPersons = () => {
  fetch('http://127.0.0.1:5000/persons')
    .then(res => res.json())
    .then(persons => {
      this.setState({ persons });
    })
    .catch(error => console.error(error));
}

addPerson = (person) => {
  fetch('http://127.0.0.1:5000/persons', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(person)
  })
    .then(res => this.getPersons())
    .catch(error => console.error(error));
}

  // updatePerson, deletePerson functions
  
  updatePerson = (id, name, age) => {
    fetch(`http://127.0.0.1:5000/persons/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, age }),  
      headers: {
        'Content-Type': 'application/json' 
      }
    }).then(res => {
      // Refresh list 
      this.componentDidMount()  
    })
  }

deletePerson = (id) => {
  fetch(`/delete/${id}`, {
    method: 'DELETE'
  }).then(() => {
    // Refresh the list
    this.componentDidMount()  
  })
}


  showUpdateForm = (person) => {
    this.setState({  
      id: person.id,
      name: person.name,   
      age: person.age
    });  
  }
submitUpdate = () => {
    // Call updatePerson()
    this.setState({ showForm: false });
  }
  render() {
    return (
     <>
       <PersonList persons={this.state.persons} />  
       <PersonForm onSubmit={this.addPerson}/>
  
       {this.state.persons.map(person => (
         <Person 
         key={person.id}
         person={person}           
         showUpdateForm={this.showUpdateForm} 
         />        
       ))} 
  
       {this.state.showForm &&  
         <UpdateForm {...this.state} onSubmit={this.submitUpdate}/>}
     </>   
    )
  }
}


export default App;

