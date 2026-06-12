import pandas as pd
from datetime import datetime

def save_assessment(
    sleep,
    work,
    screen,
    water,
    exercise,
    mood,
    social,
    stress_level
):
    row = {
        "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "sleep": sleep,
        "work": work,
        "screen": screen,
        "water": water,
        "exercise": exercise,
        "mood": mood,
        "social": social,
        "stress_level": stress_level
    }

    df = pd.DataFrame([row])

    df.to_csv(
        "data/user_data.csv",
        mode="a",
        header=False,
        index=False
    )