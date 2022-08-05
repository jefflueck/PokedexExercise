import React from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';
import defaultDeck from './defaultDeck';

const Pokedex = () => {
  return (
    <>
      <div>
        <h1 className="Pokedex-header">Pokedex</h1>
      </div>
      <div className="Pokedex">
        {defaultDeck.map((p) => (
          <>
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              base_experience={p.base_experience}
            />
          </>
        ))}
      </div>
    </>
  );
};

// const Pokedex = ({default = defaultDeck, children}) => {
//   const defaultDeck = default;
//   return (
//     <><div>
//       <h1 className="Pokedex-header">Pokedex</h1>
//     </div><div className="Pokedex">
//         {defaultDeck.map((p) => (
//           <Pokecard
//             id={p.id}
//             name={p.name}
//             type={p.type}
//             base_experience={p.base_experience} />), { children })}</div></>
//   )
// }

export default Pokedex;
