"""
This script runs the application defined in the `app` module from the `src`
package.

The script checks if it is being run as the main module and, if so, starts the
application server.

Modules:
    src.app: The application instance to be run.

Usage:
    Run this script directly to start the application server.
"""
from src import app, db
from src.models import Fish

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create tables if they don't exist
        print(f"Total Fish entries: {Fish.query.count()}")

    app.run(host="0.0.0.0", port=5000)
