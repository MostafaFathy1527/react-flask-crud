export default class APIService{
    static UpdateUser(id, name,age ,gender, email){
        return fetch(`http://127.0.0.1:5000/persons/${id}`,{
            method:'PUT',
            headers:{
            'content-Type':'application/json'
            },
            body: JSON.stringify({
                name: name,
                age:age,
                gender:gender,
                email:email
            })
        })
        .then(resp => resp.json())
    }


    static addUser(name,age ,gender, email){
        return fetch(`http://127.0.0.1:5000/persons`,{
            method:'POST',
            headers:{
            'content-Type':'application/json'
            },
            body: JSON.stringify({
                name: name,
                age:age,
                gender:gender,
                email:email
            })
        })
        .then(resp => resp.json())
    }


    static deleteUser(id){
        return fetch(`http://127.0.0.1:5000/persons/${id}`,{
            method:'DELETE',
            headers:{
            'content-Type':'application/json'
            },
            
        })
        
    }

}
