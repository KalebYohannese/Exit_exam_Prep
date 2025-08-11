const url = "http://localhost:5000";

export async function getAllQuestions() {
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
    console.error("Error fetching all questions:", error);
    throw error;
  }
}

export async function getQuestions(courseId, year) {
  // console.log("Fetching:", `${url}/questions/${courseId}/${year}`);
  try {
    const response = await fetch(`${url}/questions/${courseId}/${year}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }

    // console.log("Status:", response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error fetching questions for the course and specific year:",
      error
    );
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

export async function getCourse(courseId) {
  try {
    const response = await fetch(`${url}/courses/${courseId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch course");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw error;
  }
}
