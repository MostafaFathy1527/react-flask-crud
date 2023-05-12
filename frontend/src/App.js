import React, { Component } from 'react';

import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

class App extends Component {
  state = { 
    persons: [] 
   }

  componentDidMount() {
    this.getPersons();
  }

  getPersons = () => {
    fetch('/persons')
      .then(res => res.json())
      .then(persons => {
        this.setState({ persons });
      });
  }

  addPerson = (person) => {
    fetch('persons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(person)
    }).then(res => this.getPersons());  
  }
  
  // updatePerson, deletePerson functions

  render() {
    return (
      <div className="App">
        <PersonList persons={this.state.persons} />  
        <PersonForm onSubmit={this.addPerson} />
      </div>  
    );  
  }
}

export default App;
