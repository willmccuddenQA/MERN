'use strict'

import {useState} from 'react'

const CarComponent = () =>{

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [colour, setColour] = useState("");
    const [year, setYear] = useState("");

    return(
        <>
            <form>
                <label>Brand:</label>
                <input type="text" value={brand} onChange={e=>setBrand(e.target.value)}/>

                <label>Model:</label>
                <input type="text" value={model} onChange={e=>setModel(e.target.value)}/>

                <label>Colour:</label>
                <input type="text" value={colour} onChange={e=>setColour(e.target.value)}/>

                <label>Year:</label>
                <input type="text" value={year} onChange={e=>setYear(e.target.value)}/>
                <br/>
                <button>Submit</button>
            </form>

            <h5>Here is my car: </h5>
            <p>Brand: {brand}</p>
            <p>Model: {model}</p>
            <p>Colour: {colour}</p>
            <p>Year: {year}</p>
        </>
    );
}

export default CarComponent
