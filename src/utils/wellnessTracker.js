export const addActivity = (activity, points) => {
  const history =
    JSON.parse(
      localStorage.getItem("wellnessHistory")
    ) || [];

  history.unshift({
    activity,
    points,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem(
    "wellnessHistory",
    JSON.stringify(history)
  );

  const score =
    Number(
      localStorage.getItem("wellnessScore")
    ) || 0;

  localStorage.setItem(
    "wellnessScore",
    score + points
  );

  const completed =
    JSON.parse(
      localStorage.getItem(
        "completedActivities"
      )
    ) || [];

  if (!completed.includes(activity)) {
    completed.push(activity);

    localStorage.setItem(
      "completedActivities",
      JSON.stringify(completed)
    );
  }
};

export const getScore = () => {
  return (
    Number(
      localStorage.getItem("wellnessScore")
    ) || 0
  );
};

export const getHistory = () => {
  return (
    JSON.parse(
      localStorage.getItem(
        "wellnessHistory"
      )
    ) || []
  );
};

export const getCompleted = () => {
  return (
    JSON.parse(
      localStorage.getItem(
        "completedActivities"
      )
    ) || []
  );
};

export const getBadge = (score) => {
  if (score >= 500)
    return "🥇 Wellness Master";

  if (score >= 250)
    return "🥈 Consistent User";

  if (score >= 100)
    return "🥉 Beginner";

  return "🌱 New Explorer";
};