# pylint: disable=E0401
"""
Desc
"""
from flask import Flask, jsonify
from src.models import Fish


def get_fish_list_route(app: Flask):
    """
    Register the get_fish_list route with the Flask app.

    Args:
        app (Flask): The Flask application instance.
    """

    @app.route("/get_fish_list", methods=["GET"])
    def get_fish_list():
        """
        Handles requests to the '/get_fish_list' route.
        """

        all_fish = Fish.query.all()
        all_fish_json = list(map(lambda x: x.to_json(), all_fish))

        return jsonify({"fish": all_fish_json})
