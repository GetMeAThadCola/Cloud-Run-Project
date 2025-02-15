from flask import Flask, request, jsonify
from google.cloud import firestore

app = Flask(__name__)
db = firestore.Client()
collection = db.collection('messages')

@app.route('/add_message', methods=['POST'])
def add_message():
    data = request.json
    doc_ref = collection.document()
    doc_ref.set(data)
    return jsonify({"message": "Added", "id": doc_ref.id})

@app.route('/get_messages', methods=['GET'])
def get_messages():
    docs = collection.stream()
    return jsonify([doc.to_dict() for doc in docs])

if __name__ == '__main__':
    app.run(debug=True)
