const express = require("express");
const router = express.Router();
const supabase = require("../service/supabase");

// GET
// /questions get all qeustions
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .order("id", { ascending: true });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("Error fetching all questions:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// /questions/courseId/year get specific questions
router.get("/:courseId/:year", async (req, res) => {
  try {
    const { courseId, year } = req.params;

    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("course", Number(courseId))
      .eq("year", Number(year))
      .order("id", { ascending: true });

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("Error fetching filtered questions:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
