import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (

    <input 
        className='search' 
        type='search' 
        placeholder={ placeholder }
        // Making placeholder dynamic - make a prop
        onChange={ handleChange }
    />

);