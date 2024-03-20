from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from Rank_Search import search_food_items
from geocoding import get_coordinates
import pandas as pd

app = Flask(__name__)
# Configure CORS to allow requests from a specific origin
CORS(app, resources={r"*": {"origins": "http://localhost:3000/"}})  #accepting request from localhost:3000 only

@app.route("/result", methods=["GET"])
@cross_origin()

def Search():
    user_query = request.args.get("query", default="")

    data1 = pd.read_csv('temp_1.csv')
    data2 = pd.read_csv('temp_2.csv')

    result_df = search_food_items(user_query, data1, data2)

    try:
        result_list = result_df.to_dict(orient='records')

        return jsonify(result_list), 200, {"Content-Type": "application/json"}
    except Exception as e:
        
        return jsonify({"error": str(e)}), 500  # 500 indicates internal server error

#Fetching Coordinates from address
@app.route("/geocode", methods=["GET"])
@cross_origin()
def geocode():
    address = request.args.get("address", default="Khopoli")
    
    if not address:
        return jsonify({"error": "Address parameter is missing"}), 400

    try:
        coordinates = get_coordinates(address)
        if coordinates:
            return jsonify({"latitude": coordinates[0], "longitude": coordinates[1]}), 200
        else:
            return jsonify({"error": "Coordinates not found for the given address"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
