require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const questions = require("../data/questionsData");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

async function insertQuestions() {
  const { data, error } = await supabase.from("questions").insert(questions);

  if (error) {
    console.error("Error inserting questions:", error.message);
  } else {
    console.log("Successfully inserted questions!");
    console.log(data);
  }
}

insertQuestions();
// node scripts/seedQuestions.js
