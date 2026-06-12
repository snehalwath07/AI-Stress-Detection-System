export const getHistory = async () => {
  const response = await fetch(
    "http://127.0.0.1:5000/history"
  );

  return response.json();
};