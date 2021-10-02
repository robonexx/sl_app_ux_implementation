import React from 'react';
import './SearchBar.css'
import Search from '../icons/Search';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Vart vill du resa?"/>
        </div>
     );
}
 
export default SearchBar;