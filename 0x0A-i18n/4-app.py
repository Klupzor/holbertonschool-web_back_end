#!/usr/bin/env python3
""" Basic Flask app
"""
from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config:
    """ Config app
    """
    LANGUAGES = ["en", "fr"]


app.config.from_object(Config)
Babel.default_locale = "en"
Babel.default_timezone = 'UTC'


@babel.localeselector
def get_locale():
    """ get local config
    """
    locale = request.args.get("locale")
    if locale:
        return locale
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route("/", methods=["GET"])
def index():
    """ Returns index.html
    """
    return render_template("4-index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port="8000")
