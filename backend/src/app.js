const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("./docs/swagger");

const blaguesRoutes = require("./routes/blagues.routes");
const db = require("./model");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/blagues", blaguesRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

db.sequelize.sync();

module.exports = app;
