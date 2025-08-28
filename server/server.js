const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", require("./routes/todos"));
app.use("/api/tags", require("./routes/tags"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/settings", require("./routes/settings"));
app.use("/api/reset", require("./routes/reset"));
app.use("/api/backups", require("./routes/backups"));

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
