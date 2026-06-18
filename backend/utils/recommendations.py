def get_recommendations(
    sleep,
    work,
    screen,
    water,
    exercise,
    mood,
    social
):

    recommendations = []

    if sleep < 7:
        recommendations.append(
            "Increase sleep duration to at least 7-8 hours."
        )

    if work > 8:
        recommendations.append(
            "Reduce continuous working hours and take breaks."
        )

    if screen > 6:
        recommendations.append(
            "Reduce screen exposure and practice digital detox."
        )

    if water < 2:
        recommendations.append(
            "Increase daily water intake."
        )

    if exercise < 1:
        recommendations.append(
            "Include at least 30 minutes of physical activity."
        )

    if mood <= 2:
        recommendations.append(
            "Practice mindfulness and relaxation exercises."
        )

    if social <= 3:
        recommendations.append(
            "Spend more time with friends and family."
        )

    return recommendations