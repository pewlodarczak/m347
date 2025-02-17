import { useState } from "react";
import axios from "axios";

const AddMovie = ({ onMovieAdded }) => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState(null);

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const addMovie = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("genre", genre);
        formData.append("rating", rating);
        if (image) {
            formData.append("image", image);
        }

        await axios.post("http://localhost:5000/movies", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        // Reset form fields
        setTitle("");
        setGenre("");
        setRating("");
        setImage(null);

        onMovieAdded();
    };

    return (
        <div className="add-movie">
            <h2>Add Movie</h2>
            <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={addMovie}>➕ Add</button>
        </div>
    );
};

export default AddMovie;
