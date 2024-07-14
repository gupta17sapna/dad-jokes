
import React, { useState } from 'react';
import './App.scss';
import SearchBarWithHookForm from './components/SearchBarWithHookForm/SearchBarWithHookForm.jsx';
import JokeLoaderContainer from './container/JokeLoaderContainer.jsx';
import { SearchProvider } from './SearchContext.jsx'; 

function App() {
  const [numJokes, setNumJokes] = useState(1);
  const [page, setPage] = useState(1);

  const handleNumJokesChange = (num) => {
    setNumJokes(num);
    setPage(1);
  };

  return (
    <SearchProvider>
      <div className="App">
        <h1>Dad Jokes Search</h1>
        <SearchBarWithHookForm />
        <div className="dropdown-label">
          Number of Jokes:
          <select onChange={(e) => handleNumJokesChange(e.target.value)}>
            {[1, 5, 10, 15].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <JokeLoaderContainer numJokes={numJokes} page={page} setPage={setPage} />
      </div>
    </SearchProvider>
  );
}

export default App;