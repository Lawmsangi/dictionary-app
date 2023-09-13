import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { setQuery,fetchWords } from './../store/features/wordSlice';
import Quotes from './Quotes';
import WordDefinition from './WordDefintion';

const Home = () => {
    const [search, setSearch] = useState('');
    const [showWordDefinition, setShowWordDefinition] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
      const query = event.target.value;
      setSearch(query); // Update the search state with the input value
      dispatch(setQuery(query)); // Optionally dispatch the query to Redux
    };

  const handleSearch = () => {
    if (search) {
      setShowWordDefinition(true);
      dispatch(fetchWords(search));
      setSearch('');
    }
  };
    
  return (
    <div className="home">
      <div className="container">
        <h1>Find your words</h1>
        <div className="search-container">
            <input type="text" className="search-input" 
            placeholder="Search..." 
            onChange={handleInputChange}
            value={search}
            />    
            <button onClick={handleSearch} className="search-icon" >
              <AiOutlineSearch />
            </button>
        </div>
        {!showWordDefinition && <Quotes />}
        {showWordDefinition && <WordDefinition />}
      </div>
    </div>
  )
}

export default Home