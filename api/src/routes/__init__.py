# pylint: disable=E0401
"""
This module intiates the routes for the application.
"""
from flask import Flask
from .make_fish_list import make_fish_list_route
from .get_fish_list import get_fish_list_route


def register_routes(app: Flask, db):
    """
    Register routes for the Flask application.

    Args:
        app (Flask): The Flask application instance.
        db: The application database.
    """
    make_fish_list_route(app, db)
    get_fish_list_route(app)
