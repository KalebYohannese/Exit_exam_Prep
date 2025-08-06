require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const courses = require("../data/coursesData");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

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
