const express = require("express");
const cors = require("cors");
const blaguesRoutes = require("./routes/blagues.routes");
const { sequelize } = require("./model");

const app = express();

app.use(cors());
app.use(express.json());

// Routes versionnées
app.use("/api/v1/blagues", blaguesRoutes);

// Sync DB
sequelize.sync().then(() => {
  console.log("📦 Database synced");
});

module.exports = app;
