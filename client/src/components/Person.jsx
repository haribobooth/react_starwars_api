import React from 'react';

const Person = ({name, mass, height}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Mass: {mass}</p>
      <p>Height: {height}</p>
    </div>
  )
}

export default Person;
