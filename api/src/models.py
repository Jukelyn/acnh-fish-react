"""
This module defines the database for the application.
"""
from .database import db


class Fish(db.Model):
    """
    The database model for the fish.
    """

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True, nullable=False)
    image_url = db.Column(db.String(300), nullable=False)
    rarity = db.Column(db.String(10), nullable=False)
    price = db.Column(db.Integer)
    location = db.Column(db.String(80), nullable=False)
    size = db.Column(db.String(8), nullable=False)
    time = db.Column(db.String(20), nullable=False)
    nh_months = db.Column(db.String(20), nullable=False)
    sh_months = db.Column(db.String(20), nullable=False)

    def to_json(self) -> dict:
        """
        Returns the fish data as json.

        Returns:
            (dict): JSON representation of fish data.
        """

        return {
            "id": self.id,
            "name": self.name,
            "imageUrl": self.image_url,
            "rarity": self.rarity,
            "price": self.price,
            "location": self.location,
            "size": self.size,
            "time": self.time,
            "nhMonths": self.nh_months,
            "shMonths": self.sh_months,
        }

    def __repr__(self) -> str:
        """
        Returns a string representation of the Fish object.

        Returns:
            (str): A formatted string representing the Fish instance.
        """

        return f"<Fish(name={self.name})>"
