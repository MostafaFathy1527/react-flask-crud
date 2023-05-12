from flask import Flask, jsonify, request

app = Flask(__name__)

persons = [
    {   
        "id": "12",
        "name": "John",
        "age": "5",
        "gender": "Male"
    },
    {   
        "id": "52",
        "name": "John",
        "age": "5",
        "gender": "Male"
    }

]

@app.route('/')
def index():
    return "Hello, this is my Flask API!"

@app.route('/persons', methods=['GET'])    
def get_persons():    
    return jsonify(persons)

@app.route('/persons', methods=['POST'])
def add_person():

    person = request.get_json()
    id = int(request.form["id"]) 
    age = int(request.form["age"])
    persons.append(person)        
    return jsonify({
       'success': 'Person added successfully!' 
    })

@app.route('/persons/<int:id>', methods=['DELETE'])
def delete_person(id):
    persons.remove(person for person in persons if person['id'] == id)
    return jsonify({
        'success': 'Person deleted successfully!'    
    })

# Add route for PUT /persons/<id> to update a person

if __name__ == '__main__':
    app.run(debug=True)
