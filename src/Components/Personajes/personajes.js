import React, { useState } from "react";


export  function Personajes() {
  const [character, setCharacter] = useState("");

  let getCharacter = () => {
    let Numero = Math.floor(Math.random() * 20);
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacter(data.results[Numero]));
  };


  return (
    <div className="App">
      <div className="character-container">
      <img classname ="imgp" src={character.image} alt=""></img>
        <h1 className="characters">{character.name}</h1>
        {character.status ? (
          <div className="character-info">
            <p>
            {character.status}
            </p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
        ) : (
          <h1 className="characters">
            Genera un personaje aleatorio
          </h1>
        )}
      </div>
      <div className="get-character">
        <button className="btn" onClick={getCharacter}>
         Generar
        </button>
      </div>
    </div>
  );
}
