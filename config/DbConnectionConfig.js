require("dotenv").config({ path: "../development.env" });
const mongoose = require("mongoose");
const { addingSendData } = require("../SendData/addingSendData");

const DbConnectionConfig = async () => {
  try {
    await mongoose.connect(process.env.URI_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected App ");
    
    // Agregar Data a las tablas
    // addingSendData();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DbConnectionConfig;
