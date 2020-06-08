import React from "react";
import Player from './Player/Player'

const Team = (props) => {

  const {players} = props

  return  <ul className='team'> 
              { players.map(player => <Player player={player}/>) } 
          </ul>   
};

export default Team;
