const express = require("express");
const cors = require("cors");

const playRoutes = require("./routes/playRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/plays", playRoutes);
app.use("/register", userRoutes);

module.exports = app;
