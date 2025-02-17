const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: String, required: true },
    rating: { type: Number, required: true },
    imageUrl: { type: String, default: null },
});

module.exports = mongoose.model("Movie", MovieSchema);
