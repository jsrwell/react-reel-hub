import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?&apikey=b7400b8a'

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(['']);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Game');
    }, []);

    return (
        <div className='app'>
            <h1>React Rell Hub</h1>

            <div className="search">
                <input
                    placeholder="Search your movie"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={searchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) =>
                                <MovieCard props={movie} />
                            )}
                        </div>

                    )
                    :
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
            }

        </div>
    );
}

export default App;