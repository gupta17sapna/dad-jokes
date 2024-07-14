import React from 'react';
import '../ErrorMessage/ErrorMessage.module.scss';

function ErrorMessage({ message }) {
  return <div className="error-message">Error: {message}</div>;
}

export default ErrorMessage;
