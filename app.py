from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/uslugi")
def uslugi():
    return render_template("uslugi.html")

@app.route("/novosti")
def novosti():
    return render_template("novosti.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/history")
def history():
    return render_template("History.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)