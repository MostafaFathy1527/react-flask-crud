import React, { Component } from 'react';

class PersonForm extends Component {
  state = {
        'id':'',
        'name': '',
        'age': '',
        'gender': ''

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
      name: '',
      age: '',
      gender: 'male',  

    })     
  }
  
  render() {
    return (    
      <form onSubmit={this.handleSubmit}>
        <input 
          name="name"
          value={this.state.name}
          onChange={this.handleChange} />
          
        {/* Other form fields */}
      
        <button type="submit">          
          {this.props.person.id ? 'Update' : 'Add'} Person
        </button>                
      </form>      
    )
  }
}

export default PersonForm;
