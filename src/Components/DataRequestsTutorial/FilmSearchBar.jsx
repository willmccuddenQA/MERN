'use strict'

import { useState } from 'react'

const FilmSearchBar = ({setFilms, setError}) => {

    const [searchText, setSearchText] = useState("");

    const retrieveFilms = (text) =>{
            axios
                .get("http://www.omdbapi.com/?apikey=1f69c227&t=" + text)
                .then((res) => res)
                .then((result) => {
                    setFilms(result.data.data);
    
                },
                    (error) => {
                        setError(error);
                    }
                );
    }

    return (
        <>
            <form onSubmit = {retrieveFilms(searchText)}>
                <label>Film:</label>
                <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} ></input>
                <button> Search</button>
            </form>
        </>
    );
}

export default FilmSearchBar