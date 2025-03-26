# pylint: disable=E0401
"""
Desc
"""
import os
import requests
from flask import Flask, jsonify
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError, OperationalError, DatabaseError
from sqlalchemy.exc import StatementError, InvalidRequestError
from src.models import Fish

load_dotenv()

API_KEY = os.getenv("NOOKIPEDIA_API_KEY")

headers = {"X-API-KEY": API_KEY, "Accept-Version": "1.7.0"}

URL = "https://api.nookipedia.com/nh/fish"


def get_fish_info(name: str = ""):
    """
    Get's the fish info based on the name.

    Args:
        name (str): The fish name.

    Returns:
        (__type__): The API response.
    """
    if name:
        response = requests.get(url=f"{URL}/{name}",
                                headers=headers,
                                timeout=10)
    else:
        params = {'excludedetails': 'true'}
        response = requests.get(url=URL,
                                headers=headers,
                                params=params,
                                timeout=30)

    if response.status_code != 200:
        return (response.status_code, "Something went wrong.")

    return (response.status_code, response.json())


def make_fish_list_route(app: Flask, db: SQLAlchemy):
    """
    Register the make_fish_list route with the Flask app.

    Args:
        app (Flask): The Flask application instance.
    """

    @app.route("/make_fish_list", methods=["GET"])
    def make_fish_list():
        """
        Handles requests to the '/make_fish_list' route.
        """
        _, fish_arr = get_fish_info()
        for fish in fish_arr:
            _, fish_info = get_fish_info(fish)

            available = fish_info["north"]["availability_array"][0]

            new_fish = Fish(
                name=fish_info["name"],
                image_url=fish_info["image_url"],
                rarity=fish_info["rarity"],
                price=fish_info["sell_nook"],
                location=fish_info["location"],
                size=fish_info["shadow_size"],
                time=available["time"],
                nh_months=fish_info["north"]["months"],
                sh_months=fish_info["south"]["months"]
            )

            try:
                db.session.add(new_fish)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
                return jsonify({"message": "Integrity error."}), 400
            except OperationalError:
                db.session.rollback()
                return jsonify({"message": "Operational error."}), 500
            except (DatabaseError, StatementError, InvalidRequestError):
                db.session.rollback()
                return jsonify({"message": "There was an error."}), 500
            except Exception as e:  # pylint: disable=W0718
                db.session.rollback()
                return jsonify({"message": f"Unexpected error: {e}"}), 500

        return jsonify({"message": "Fish list created!"}), 201
