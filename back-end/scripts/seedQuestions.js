const supabase = require("../service/supabase");
const questions = require("../data/questionsData");

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
