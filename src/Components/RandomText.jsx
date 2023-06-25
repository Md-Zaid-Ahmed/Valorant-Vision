import React, { useState, useEffect } from 'react';

const texts = ['Bonjur!', 'Hello Darling!', 'Salam!', 'Hola!'];

function RandomText() {
  const [randomText, setRandomText] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    setRandomText(texts[randomIndex]);
  }, []);

  return (
    
      <h1>{randomText}</h1>
    
  );
}

export default RandomText;
