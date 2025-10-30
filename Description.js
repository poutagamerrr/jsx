
import React from 'react';

function Description({ description }) {
  const defaultDescription = "High-quality wireless headphones with noise cancellation, long battery life, and superior sound clarity.";
  return <p>{description || defaultDescription}</p>;
}

export default Description;
    