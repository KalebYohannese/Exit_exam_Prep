const url = "http://localhost:5000";

export async function getQuestions() {
  try {
    const response = await fetch(`${url}/questions`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

export async function getCourses() {
  try {
    const response = await fetch(`${url}/courses`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
}
