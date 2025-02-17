import axios from "axios";

const MovieList = ({ movies, onDelete }) => {
    const deleteMovie = async (id) => {
        await axios.delete(`http://localhost:5000/movies/${id}`);
        onDelete(); // 🔹 Refresh movie list after deletion
    };

    return (
        <div className="movie-list">
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id} style={{ color: "#333", fontSize: "18px" }}>
                        {movie.imageUrl && (
                            <img src={`http://localhost:5000${movie.imageUrl}`} alt={movie.title}
                                 style={{ width: "100px", height: "150px", objectFit: "cover", borderRadius: "8px", marginRight: "10px" }} />
                        )}
                        {movie.title} ({movie.genre}) - {movie.rating} ⭐
                        <button onClick={() => deleteMovie(movie._id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
