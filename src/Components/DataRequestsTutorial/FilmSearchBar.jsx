'use strict'

import { useState, useEffect} from 'react';
import axios from 'axios';

const FilmSearchBar = ({setFilms, setError, setIsLoaded}) => {

    const [searchText, setSearchText] = useState("");

    const newSearchInput = ({target}) => {
        setSearchText(target.value);
    }

    const submitForm = (event) =>{
        event.preventDefault();
    }

    const makeRequest =(e) => {
        axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=1f69c227&s=" + searchText)
        .then(response => {
            console.log(response.data.Search);
            setFilms = response.data.Search;
        });
    };

    return (
        <>
            <form onSubmit = {submitForm}>
                <label>Film:</label>
                <input type="text" onChange={(e) => newSearchInput(e)}></input>
                <button onClick={(e) => makeRequest(e)}>Enter</button>
            </form>
        </>
    );
}

export default FilmSearchBar