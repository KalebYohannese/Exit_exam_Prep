const supabase = require("../service/supabase");
const courses = require("../data/coursesData");

async function insertCourses() {
  const { data, error } = await supabase.from("courses").insert(courses);

  if (error) {
    console.error("Error inserting courses:", error.message);
  } else {
    console.log("Successfully inserted courses!");
    console.log(data);
  }
}

insertCourses();
// node scripts/seedCourses.js
