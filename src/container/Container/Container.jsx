import React from 'react';
import '../Container/Container.module.scss';

function Container({ children }) {
  return <div className="container">{children}</div>;
}

export default Container;
