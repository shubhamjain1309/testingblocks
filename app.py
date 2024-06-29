from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/rename_block', methods=['POST'])
def rename_block():
    data = request.get_json()
    # Process renaming logic here
    return jsonify(status='success', new_name=data['new_name'])

if __name__ == '__main__':
    app.run(debug=True)
