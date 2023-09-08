import { useEffect, useState } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?&apikey=b7400b8a'

const simulate = [
    {
        "Title": "Game of Thrones",
        "Year": "2011–2019",
        "imdbID": "tt0944947",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg"
    },
    {
        "Title": "The Imitation Game",
        "Year": "2014",
        "imdbID": "tt2084970",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_SX300.jpg"
    },
    {
        "Title": "Squid Game",
        "Year": "2021–",
        "imdbID": "tt10919420",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
    },
    {
        "Title": "Sherlock Holmes: A Game of Shadows",
        "Year": "2011",
        "imdbID": "tt1515091",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_SX300.jpg"
    },
    {
        "Title": "The Game",
        "Year": "1997",
        "imdbID": "tt0119174",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWQ2ODFhNWItNTA4NS00MzkyLTgyYzUtZjlhYWE5MmEzY2Q1XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
        "Title": "Ender's Game",
        "Year": "2013",
        "imdbID": "tt1731141",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg"
    },
    {
        "Title": "Game Night",
        "Year": "2018",
        "imdbID": "tt2704998",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_SX300.jpg"
    },
    {
        "Title": "Molly's Game",
        "Year": "2017",
        "imdbID": "tt4209788",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        "Title": "Spy Game",
        "Year": "2001",
        "imdbID": "tt0266987",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhOGZkNzktMGU3NC00ODk2LWE4NjctZTliN2JjZTQxZmIxXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Gerald's Game",
        "Year": "2017",
        "imdbID": "tt3748172",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzg0NGE0N2MtYTg1My00NTBkLWI5NjEtZTgyMDA0MTU4MmIyXkEyXkFqcGdeQXVyMTU2NTcyMg@@._V1_SX300.jpg"
    }
]

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
            <h1>React Reel Hub</h1>

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
                // movies?.length > 0
                //     ? (
                //         <div className="container">
                //             {movies.map((movie) =>
                //                 <MovieCard props={movie} />
                //             )}
                //         </div>

                //     )
                //     :
                //     <div className="empty">
                //         <h2>No movies found</h2>
                //     </div>
                
                simulate?.length > 0
                    ? (
                        <div className="container">
                            {simulate.map((movie) =>
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