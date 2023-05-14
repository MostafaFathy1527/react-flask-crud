from flask import Flask , request , make_response, jsonify,render_template
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
persons = [
    {   
        "id": "4",
        "name": "John",
        "age": "5",
        "gender": "Male",
        "email": "dsfasd@dsfsd.com"
    },
    {   
        "id": "52",
        "name": "Johna",
        "age": "54",
        "gender": "Male",
        "email": "dsfasd@dsfsd.com"

    }
]

@app.route('/test', methods=['GET'])
def test():
    return make_response(jsonify({'message': 'test route'}), 200)

@app.route('/persons', methods=['POST'])
def create_person():
    try:
        data = request.get_json()
        new_person = {
            "id": str(len(persons) + 1),
            "name": data['name'],
            "age": data['age'],
            "gender": data['gender'],
            "email": data['email']

        }
        persons.append(new_person)
        return make_response(jsonify(new_person), 201)
    except Exception as e:
        return make_response(jsonify({'message': 'error creating person'}), 500)

@app.route('/persons', methods=['GET'])
def get_persons():
    try:
        return make_response(jsonify({'persons': persons}), 200)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting persons'}), 500)

@app.route('/persons/<int:id>', methods=['GET'])
def get_person(id):
    try:
        person = next((p for p in persons if p['id'] == str(id)), None)
        if person:
            return make_response(jsonify(person), 200)
        return make_response(jsonify({'message': 'person not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error getting person'}), 500)

@app.route('/persons/<int:id>', methods=['PUT'])
def update_person(id):
    try:
        person = next((p for p in persons if p['id'] == str(id)), None)
        if person:
            data = request.get_json()
            person['name'] = data['name']
            person['age'] = data['age']
            person['gender'] = data['gender']
            person['email'] = data['email']
            return make_response(jsonify(person), 200)
        return make_response(jsonify({'message': 'person not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error updating person'}), 500)

@app.route('/persons/<int:id>', methods=['DELETE'])
def delete_person(id):
    try:
        person = next((p for p in persons if p['id'] == str(id)), None)
        if person:
            persons.remove(person)
            return make_response(jsonify({'message': 'person deleted'}), 200)
        return make_response(jsonify({'message': 'person not found'}), 404)
    except Exception as e:
        return make_response(jsonify({'message': 'error deleting person'}), 500)

if __name__ == "__main__":
    app.run(debug=True)
