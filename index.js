const express = require("express");
const app = express();
const PORT = 3000;
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs/index')

app.use(express.json());

const dbConnection = require("./config/config");

dbConnection();
//MIDDLEWARE
app.use(express.json());

//RUTAS (+PREFIJO)
app.use("/tasks", require("./routes/tasks"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
