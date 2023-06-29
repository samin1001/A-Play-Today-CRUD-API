const express = require("express");
const cors = require("cors");

const playRoutes = require("./routes/playRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plays", playRoutes);

module.exports = app;