import React, { useState, useEffect, useContext } from 'react';
import Joke from '../components/Joke/Joke';
import Loading from '../components/Loading/Loading';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage.jsx';
import Container from './Container/Container.jsx';
import { SearchContext } from '../SearchContext.jsx';
import '../container/JokeLoaderContainer.module.scss';

function JokeLoaderContainer({ numJokes, page, setPage }) {
  const { searchTerm } = useContext(SearchContext);
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}&limit=${numJokes}&page=${page}`, {
          headers: {
            Accept: 'application/json',
          },
        });
        const data = await response.json();
        if (data.results.length === 0) {
          setError('No jokes found.');
          setJokes([]);
        } else {
          setJokes(data.results);
        }
      } catch (err) {
        setError('Failed to fetch jokes. Please try again.');
        setJokes([]);
      }
      setLoading(false);
    };

    if (searchTerm) {
      fetchJokes();
    }
  }, [searchTerm, numJokes, page]);

  return (
    <Container>
     {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && jokes.map((joke) => <Joke key={joke.id} joke={joke.joke} />)}
      {!loading && !error && jokes.length > 0 && (
        <div className="pagination-buttons">
          <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </div>
      )}
    </Container>
  );
}

export default JokeLoaderContainer;
