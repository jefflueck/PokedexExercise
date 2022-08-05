import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => {
  let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <h3 className="Pokecard-name">{name}</h3>
      <img className="Pokecard-img" src={imgSrc} alt={name} />
      <p className="Pokecard-type">Type: {type}</p>
      <p className="Pokecard-exp">EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
