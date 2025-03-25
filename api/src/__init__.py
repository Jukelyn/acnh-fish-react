# pylint: disable=E0401
"""
This script initializes a Flask application, loads environment variables,
and registers routes.
"""
from src.routes import register_routes
from .config import config_app

app, db = config_app()

register_routes(app, db)

print(db.Model)
