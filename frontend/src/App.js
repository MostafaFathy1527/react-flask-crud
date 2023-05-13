
import './App.css';
import { useState, useEffect } from 'react';
import UserList from './components/UserList';
import Form from './components/Form';

function App() {

  const [persons, setUsers] = useState([]);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/persons', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        if (data && data.persons) {
          setUsers(data.persons);
        } else {
          console.error('Response is missing persons property.');
        }
      })
      .catch(error => console.log(error))
  }, [])

  const editUser = (user) => {
    setEditedUser(user)
  }

  // const updatedData = (user)=>{
  //     const new_user = persons.map(my_user=>{
  //       if(my_user.id === user.id){
  //         return user
  //       }else{
  //         return my_user
  //       }
  //     })
  //     setUsers(new_user)
  // }
  const updatedData = (updatedUser) => {
    const updatedPersons = persons.map((person) =>
      person.id === updatedUser.id ? updatedUser : person
    );
    setUsers(updatedPersons);
  };

  const openForm = () => {
    setEditedUser({ name: '', age: '', gender: '', email: '' })
  }

  const addeduser = (user) => {
    const new_users = [...persons, user]
    setUsers(new_users)
  }

  const deleteUser = (user) => {
    const new_users = persons.filter(myuser => {
      if (myuser.id === user.id) {
        return false
      }
      return true
    })
    setUsers(new_users)
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <h1>persons list</h1>
        </div>

        <div className="col">
          <button
            className="btn btn-success"
            onClick={openForm}
          >Add person</button>
        </div>
      </div>

      <UserList persons={persons} editUser={editUser} deleteUser={deleteUser} />

      {editedUser ? <Form user={editedUser} updatedData={updatedData} addeduser={addeduser} /> : null}



    </div>
  );
}

export default App;
