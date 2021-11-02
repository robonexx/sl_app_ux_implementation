import React from 'react';
import './SearchBar.css'
import Search from '../../assets/icons/Search';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <Search />
            <input type="text" placeholder={`Vart vill du resa?`}/>
        </div>
     );
}
 
export default SearchBar;