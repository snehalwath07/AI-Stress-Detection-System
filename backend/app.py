from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

import sys
import os

sys.path.append(
    os.path.abspath("../frontend/src")
)

from utils.predict import predict_stress
from utils.recommendations import get_recommendations
from utils.history import save_assessment

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return {
        "message": "Stress Prediction AI API Running"
    }


@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.json

        sleep = float(data["sleep"])
        work = float(data["work"])
        screen = float(data["screen"])
        water = float(data["water"])
        exercise = float(data["exercise"])
        mood = float(data["mood"])
        social = float(data["social"])

        # ML Prediction
        prediction = predict_stress(
            sleep,
            work,
            screen,
            water,
            exercise,
            mood,
            social
        )

        # AI Recommendations
        recommendations = get_recommendations(
            sleep,
            work,
            screen,
            water,
            exercise,
            mood,
            social
        )

        # Save Assessment
        save_assessment(
            sleep,
            work,
            screen,
            water,
            exercise,
            mood,
            social,
            prediction
        )

        return jsonify({
            "stress_level": prediction,
            "recommendations": recommendations
        })

    except Exception as e:
        print("ERROR:", e)

        return jsonify({
            "error": str(e)
        }), 500


@app.route("/history", methods=["GET"])
def history():

    try:
        df = pd.read_csv("data/user_data.csv")

        return jsonify(
            df.tail(10).to_dict(orient="records")
        )

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


@app.route("/latest", methods=["GET"])
def latest():

    try:
        df = pd.read_csv("data/user_data.csv")

        if df.empty:
            return jsonify({})

        latest_record = df.iloc[-1]

        return jsonify(
            latest_record.to_dict()
        )

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(debug=True)
    import os

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )
