export default async function fetchJson(...args) {
  try {
    const response = await fetch(...args);
    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (response.ok) {
      return data;
    }

    const error = new Error(response.statusText);
    error.response = response;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
