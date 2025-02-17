import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import axios from "axios";
import "./App.css"; // Ensure CSS is imported

function App() {
    const [movies, setMovies] = useState([]);

    // Function to fetch movies from backend
    const fetchMovies = async () => {
        const response = await axios.get("http://localhost:5000/movies");
        setMovies(response.data);
    };

    // Fetch movies when the app loads
    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>🎬 MovieApp</h1>
            </header>

            <main className="app-content">
                <AddMovie onMovieAdded={fetchMovies} />
                <MovieList movies={movies} onDelete={fetchMovies} />
            </main>
        </div>
    );
}

export default App;
