import joblib
import pandas as pd

model = joblib.load("models/stress_model.pkl")

def predict_stress(
    sleep,
    work,
    screen,
    water,
    exercise,
    mood,
    social
):

    input_data = pd.DataFrame(
        [[
            sleep,
            work,
            screen,
            water,
            exercise,
            mood,
            social
        ]],
        columns=[
            "sleep",
            "work",
            "screen",
            "water",
            "exercise",
            "mood",
            "social"
        ]
    )

    prediction = model.predict(input_data)[0]

    return prediction