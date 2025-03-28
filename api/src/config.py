# pylint: disable=E0401
"""
This script initializes a Flask application, loads environment variables,
and registers routes.

The script performs the following tasks:
1. Loads environment variables from a .env file using `load_dotenv()`.
2. Creates a Flask application instance with specified template and static
    folders.
3. Configures the Flask application with a secret key from the environment
    variables.
4. Registers application routes using a custom `register_routes` function.

Attributes:
     app (Flask): The Flask application instance.
"""
import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from .database import db

load_dotenv()


def config_app():
    """
    Initializes the flask app and database
    """

    app = Flask(__name__)

    CORS(app)

    app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.init_app(app)
    return (app, db)
