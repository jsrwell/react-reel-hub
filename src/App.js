import { useEffect } from 'react';

import MovieCard from './MovieCard';

import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com/?&apikey=b7400b8a'

const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}
const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className='app'>
            <h1>React Rell Hub</h1>

            <div className="search">
                <input
                    placeholder="Search your movie"
                    value={"Superman"}
                    onChange={() => { }}
                />
                <img src={searchIcon}
                    alt="Search"
                    onClick={() => { }}
                />

            </div>

            <div className="container">
                <MovieCard props={movie1} />
            </div>

        </div>
    );
}

export default App;