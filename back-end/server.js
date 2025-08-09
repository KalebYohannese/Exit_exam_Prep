const express = require("express");
const cors = require("cors");
// const supabase = require("../service/supabase");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
// const aiRoutes = require("./routes/aiRoutes");
const questionRoutes = require("./routes/questionRoutes");
const courseRoutes = require("./routes/courseRoutes");

// app.use("/api", aiRoutes);
app.use("/questions", questionRoutes);
app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
