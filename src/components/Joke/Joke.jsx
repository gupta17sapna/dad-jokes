import React from 'react';
import '../Joke/Joke.module.scss';

function Joke({ joke }) {
  return <div className="joke">{joke}</div>;
}

export default Joke;
