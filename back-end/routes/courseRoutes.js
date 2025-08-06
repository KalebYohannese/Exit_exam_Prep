const express = require("express");
const router = express.Router();
require("dotenv").config();

// Supabase
const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// GET /courses/
router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase.from("courses").select("*");

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ message: "Failed to fetch courses" });
    }

    res.json(data);
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
