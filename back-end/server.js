const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const aiRoutes = require("./routes/aiRoutes");
const questionRoutes = require("./routes/questionRoutes");

// Supabase
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", aiRoutes);
app.use("/question", questionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
