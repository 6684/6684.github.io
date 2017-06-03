from flask import Flask, request
from flask_cors import CORS
import os
app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET', 'POST'])
def qeqeqe():
  p = request.values.get("password")
  if p:
    if p == "zxcvbn":
      return "https://quest-6684.herokuapp.com/image.png";
    else:
      return "fail";
  else:
    return "Hello world!"

port = int(os.environ.get('PORT', 5000))
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)
