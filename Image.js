import React from 'react';

function Image({ src, alt }) {
  return <img src={src} alt={alt} style={{ maxWidth: '100%' }} />;
}

export default Image;
