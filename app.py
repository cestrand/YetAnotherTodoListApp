from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def index():
    return "<p>Hello from Flask!</p>"

if __name__ == "__main__":
    app.run(
        debug = os.environ.get("DEBUG", True)
    )