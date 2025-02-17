const mongoose = require("mongoose");
require("dotenv").config();

//const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/movieapp";
//const mongoURI = process.env.MONGO_URI || "mongodb://admin:password@movieapp-mongo-1:27017:27017/movieapp?authSource=admin";
const mongoURI = process.env.MONGO_URI || "mongodb://movieapp-mongo-1:27017:27017/movieapp";


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

module.exports = mongoose;

