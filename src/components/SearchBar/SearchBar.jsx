import React, { useState } from 'react';
import '../SearchBar/SearchBar.module.scss';

function SearchBar({ onSearch, onNumJokesChange }) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  const handleNumJokesChange = (e) => {
    onNumJokesChange(e.target.value);
  };

  return (
    <div className="Search-Bar">
      <form onSubmit={handleSubmit}className="search-form">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a joke..."
        />
        <button type="submit">Search</button>
      </form>
      <label>
        Number of Jokes:
        <select onChange={handleNumJokesChange}>
          {[1, 5, 10, 15].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
