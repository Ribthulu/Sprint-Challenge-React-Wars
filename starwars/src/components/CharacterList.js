/*jshint esversion: 6 */

import React from 'react';
import NewCharacter from './NewCharacter';
import './StarWars.css';

const CharacterList = (props) =>{

    return (
      <div className="characterCard">
        {props.Characterlist.map(NewCharacterOutput => (
          <NewCharacter NewCharacter={NewCharacterOutput} />
        ))}
      </div>
    );
  }
  export default CharacterList
