/*jshint esversion: 6 */

import React from 'react';
import './StarWars.css';

const NewCharacter = (props) =>{
    return (
          <div className="characterList">
            <h3>Name: {props.NewCharacter.name}</h3>
            <p>Height: {props.NewCharacter.height}</p>
            <p>Mass: {props.NewCharacter.mass}</p>
            <p>Hair Color: {props.NewCharacter.hair_color}</p>
            <p>Skin Color: {props.NewCharacter.skin_color}</p>
            <p>Eye Color: {props.NewCharacter.eye_color}</p>
            <p>Birth Year: {props.NewCharacter.birth_year}</p>
            <p>Gender: {props.NewCharacter.gender}</p>
          </div>
    )

}
export default NewCharacter
