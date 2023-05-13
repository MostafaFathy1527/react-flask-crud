import React, { Component } from 'react';

class PersonForm extends Component {
state = {
  "age": "",
  "gender": "",
  "id": "",
  "name": ""
}

  
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })  
  }
  
  handleSubmit = (event) => {
    event.preventDefault() 
    if(this.props.person.id) {
      this.props.onUpdate(this.props.person.id, this.state) 
    } else {       
      this.props.onSubmit(this.state)      
    }     
    this.setState({
  "age": "",
  "gender": "",
  "id": "",
  "name": ""
    })     
  }
  
  render() {
  if (!this.props.person) {
    return null; // or some other fallback UI
  }
    return (    
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
          

      
        <button type="submit">          
          {this.props.person.id ? 'Update' : 'Add'} Person
        </button>                
      </form>      
    )
  }
}

export default PersonForm;