const mongoose = require("mongoose");
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Enhorabuena! Base de datos conectada 🎉")
    } catch (error) {
        console.error(error)
    }
};

module.exports = dbConnection