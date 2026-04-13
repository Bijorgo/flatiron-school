# Phase 4: Routing
# by Sakib Rasul

# Core Deliverables
# 1. Install Flask.
# 2. Configure a new Flask application.
# 3. Install Flask-SQLAlchemy and Flask-Migrate.
# 4. Create and populate a new database.
# 5. Write a GET route that fetches all rows from a table.
# 6. Write a POST route that adds one row.
# 7. Write an instance method to_dict() to support serialization.
# 8. Try --port, --debug, FLASK_RUN_PORT, FLASK_ENV.
# 9. Use Postman to start testing your routes.
# 10. Write a GET route that fetches one row.
# 11. Write a PATCH route that updates one row.
# 12. Write a DELETE route that removes one row.

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Initialize instance of Flask
app = Flask(__name__)
# Link our ORM to a database 
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db"
# Disable SQLAlchemy'd built-in event listeners 
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# Make JSON responses verbose for readability
app.json.compact = False

# Initialize instance of SQLAlchemy
db = SQLAlchemy(app)
# Initialize instance of Alembic
migrate = Migrate(app, db)

# Write our model(s) that align object-oriented (python) classes
# with relational (SQL) tables 
class Recipe(db.Model):
    # Name the table associated with this class
    __tablename__ = "recipes"
    # Specify attributes / columns associated with this model
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    cook_time = db.Column(db.Integer, nullable=True)

    def to_dict(self): 
        return { "id" : self.id, "name" : self.name, "cook_time" : self.cook_time}

# Controller
# Write our flask routes that the user, through **views**, can 
# request manipulations of our model

# When the user, in their view, makes a GET request to /...:
@app.get("/")
# ... run this function:
def index():
    return jsonify({ "message" : 
                   "Hello, World! Welcome to the Recipe API."}
                   ), 200 # Status code OK (request valid, sent response)

@app.get("/recipes")
def get_recipes():
    return jsonify([ recipe.to_dict  for recipe in Recipe.query.all()])

@app.post("/recipes")
def write_a_recipe():  
    # Take the body of the user's POST request (an object)
    # and convert it into a dictionary --- call it 'new_recipe'
    new_recipe = request.json
    try:
        db.session.add(Recipe (name=new_recipe["name"], cook_time=new_recipe["cook_time"]))
        # alt: 
        #db.session.add(Recipe(**new_recipe))
            # ** before a dictinary to "unpack" it nto the parameters of a function or instantiation
        db.session.commit()
        return jsonify(
            # SELECT * from recipes PRDER BY id DESC LIMIT 1
            Recipe.query.order_by(Recipe.id.desc()).first().to_dict()
            ), 201 # Created (i.e. something was successfully created according to the request)
    except Exception as exc:
        # Handle the exception
        return jsonify({ "error": str(exc) }), 400 # Bad request

# TODO: GET by id // write a route that retrieves a recipe by id
@app.get("/recipes/<int:id>")
def get_recipe_by_id():
    recipe = db.session.get(Recipe.id)
    if recipe:
        return jsonify(recipe.to_dict())
    else:
        return jsonify({ "error" : "Incorrect ID."}), 404 #not found

# TODO: PATCH write a route that updates an existing recipe
@app.patch("/recipes/<int:id>") # 
def modify_a_recipe(id):
    # We want to return a modified copy of a row in the recipes table
    existing_recipe = db.session.get(Recipe, id)
    # ALT:
    # existing_recipe = Recipe.query.where(Recipe.id == id).first()
        # More verbose, more like SQL syntax, doesnt matter which way you choose
    if existing_recipe:
        try:
            updated_recipe = request.json
            for key in updated_recipe:
                # setattr(instance, data_attribute, new_value)
                setattr(existing_recipe, key, updated_recipe[key])

            # below is a ridgid alt that forces both of those to be updated
            #existing_recipe.cook_time = updated_recipe["cook_time"]
            #existing_recipe.name = updated_recipe["name"]

            db.session.add(existing_recipe)
            db.session.commit()
            return jsonify(db.session.get(Recipe, id).to_dict()), 200 #OK
        except Exception as exc:
            return jsonify({ "error": str(exc) }), 400 # bad request
    else:
        return jsonify({ "error" : "ID was not found." }), 404

# TODO: DELETE write a route that removes a recie from the database
@app.delete("/recipes/<int:id")
def remove_recipe(id):
    existing_recipe = db.session.get(Recipe, id)
    if existing_recipe:
        try:
            db.sesion.delete(existing_recipe)
            db.session.commit()
            return jsonify({}), 204 # empty sucessful response, "NO CONTENT"
        except Exception as exc:
            return jsonify({ "error": str(exc)}), 400
    else:
        return jsonify({ "error": "ID not found"}), 404