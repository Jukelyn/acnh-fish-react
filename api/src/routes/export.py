# pylint: disable=E0401
"""
This module provides the route for the export page. It handles GET requests to
display fish data, including all available fish and uncaught fish.
"""
import json
from flask import Flask, render_template
import src.main as ut


def export_route(app: Flask):
    """
    Register the export page route with the Flask app.

    Args:
        app (Flask): The Flask application instance.
    """
    @app.route("/export")
    def export():
        """
        Handles requests to the '/export' route.
        """
        return render_template(
            "export.html",
            fish_list=ut.all_fish_list,
            uncaught_fish=ut.uncaught,
            fish_list_json=json.dumps(ut.all_fish_list),
            uncaught_fish_json=json.dumps(sorted(ut.uncaught, key=str.lower))
        )
