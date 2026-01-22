const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/authRouter"));
app.use("/courses", require("./routes/CourseRouter"));
app.use("/categories", require("./routes/CategoryRouter"));
app.use("/stats", require("./routes/statRouter"));

module.exports = app;
