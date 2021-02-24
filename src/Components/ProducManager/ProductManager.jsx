'use strict'

import {useState} from 'react';

const ProductManager = () =>{
    //item will be an object with name and quantity
    const [item, setItem] = useState();

    const newItem = ({target}) =>{
        setItem(target.value);
    }

    const submitForm = (event) =>{
        event.preventDefault();
    }

    const handleAdd = () =>{
        
    }
}