import React from 'react'
import APIService from './APIService'

function UserList(props) {

  const editUser = (user) => {
    props.editUser(user)
  }

  const deleteUser=(user)=>{
    APIService.deleteUser(user.id)
    .then(()=> props.deleteUser(user))
  }
  return (
    <div>
        {props.persons && props.persons.map(user =>{
        return(
        <div key = {user.id} class="user">
            <h2>person {user.id} Information:</h2>
            <h2>person: {user.name}</h2>
            <h2>age: {user.age}</h2>
            <h2>gender: {user.gender} </h2>
            <h2>email: {user.email} </h2>

            <div className = "row">
              <div className = "col-md-1">
                <button className="btn btn-primary"
                onClick = {()=> editUser(user)}
                >edit person</button>
              </div>

              <div className = "col">
                  <button className="btn btn-danger"
                  onClick={()=> deleteUser(user)}
                  >delete person</button>
              </div>

            </div>

            
        </div>
        )
      })}
    </div>
  )
}

export default UserList
