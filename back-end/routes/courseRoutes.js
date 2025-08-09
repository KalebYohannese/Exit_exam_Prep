const express = require("express");
const router = express.Router();
const supabase = require("../service/supabase");

// GET
// /courses get all courses
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("courses").select("*");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("Error fetching all courses", err);
    res.status(500).json({ message: "Server error" });
  }
});

// /courses/courseId get specific course
router.get("/:courseId", async (req, res) => {
  try {
    const { courseId } = req.params;

    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", Number(courseId));

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("Error fetching course", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
