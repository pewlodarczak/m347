const express = require("express");
const cors = require("cors");
const mongoose = require("./db");
const Movie = require("./models/Movie");
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// 🔹 Multer Setup (Store Images in "uploads/" folder)
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// 🔹 Get all movies
app.get("/movies", async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
});


// 🔹 Add a movie with image upload
app.post("/movies", upload.single("image"), async (req, res) => {
    const { title, genre, rating } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // Store image URL

    const newMovie = new Movie({ title, genre, rating, imageUrl });
    await newMovie.save();
    res.json(newMovie);
});

// 🔹 Delete a movie
app.delete("/movies/:id", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted" });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
