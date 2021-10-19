require("dotenv").config({ path: "development.env" });
const express = require("express");
const DbConnectionConfig = require("./config/DbConnectionConfig");
const app = express();

// Puerto de la App
const PORT = process.env.PORT || process.env.PORT_DEV;

// Conectar a la DB
DbConnectionConfig();

// Habilitar express json
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: false }));

// Rutas de la app
app.use("/api/products", require("./routers/productsRoutes"));
app.use("/api/productsTypes", require("./routers/productsTypesRoutes"));

// Arrancar la App
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
