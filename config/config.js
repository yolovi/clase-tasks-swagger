const mongoose = require("mongoose");
const {MONGO_URI} = require('./keys')

const dbConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Enhorabuena! Base de datos conectada 🎉")
    } catch (error) {
        console.error(error)
    }
};

module.exports = dbConnection