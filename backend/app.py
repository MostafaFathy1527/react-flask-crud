from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

persons = [
    {   
        "id": "4",
        "name": "John",
        "age": "5",
        "gender": "Male"
    }
,
    {   
        "id": "52",
        "name": "Johna",
        "age": "54",
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
    persons.append(person)        
    return jsonify({
       'success': 'Person added successfully!' 
    }), 201

@app.route('/persons/<int:id>', methods=['DELETE'])
def delete_person(id):
    persons.remove(person for person in persons if person['id'] == id)
    return jsonify({
        'success': 'Person deleted successfully!'    
    })
@app.route('/persons/<int:id>', methods=['PUT'])
def update_person(id):
    person = request.get_json()
        
    # Update person with matching ID
    for person in persons:
        if person['id'] == id:
            person['name'] = request.json['name']
            person['age'] = request.json['age']
            
    return jsonify({
        'success': 'Person updated successfully!'    
    })

# Add route for PUT /persons/<id> to update a person

if __name__ == '__main__':
    app.run(debug=True)
