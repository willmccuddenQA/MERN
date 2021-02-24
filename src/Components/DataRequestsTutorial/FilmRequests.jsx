import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowFilms from "./ShowFilms";
import FilmSearchBar from "./FilmSearchBar"

const FilmReq = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [films, setFilms] = useState([]);

    return (
        <>
            <FilmSearchBar setFilms={setFilms} setError={setError} />
            <ShowFilms films={films} />
        </>
    );
}

export default FilmReq; 