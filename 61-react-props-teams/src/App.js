import React, { useState } from "react";
import "./App.css";
import Team from './components/Team/Team';

/**
 * Exercise:
 * 
 * 1. Render all players in default column. Column class - "players".
 * 1.1 Layout for player item 
 * <li>
 * 		<span>{player}</span>
		<button>Team 1</button>
		<button>Team 2</button>
	</li>
 * 2. Each player in default column should have button to move to team 1
 * and button to move to team 2
 * 3. Create component <Team /> and pass players from each team to it.
 * 4. Create <Player /> component and inside <Team /> component use it to render
 * each player.
 * 5. When I click on a button to move a player to the selected team, that player 
 * should be removed from the main column and added to the coresponding team.
 * 6. div rendered by <Team/> should have class "team"
 * 7. div rendered by <Player/> should have class "player"
 */

const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);

  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([]) 

  const removedSelectedPlayer = (playerName) => {
    const filterdPlayers = players.filter(player => player !== playerName)
    setPlayers(filterdPlayers)
  }

  const clickHandler = (e) => {
    const value = e.target.dataset.value
    const playerName = e.target.dataset.player
    
    if(value === "team1") {
      setTeamOne([...teamOne, playerName])
      removedSelectedPlayer(playerName)
      
    }
    else if(value === "team2") {
      setTeamTwo([...teamTwo, playerName])
      removedSelectedPlayer(playerName)
    }
  }

  
  return <div className="app">
            <ul className='players'>
                  <li className='title'>All Players</li>
                  {players.map( player => (
                    <>
                      <li className='player'>
                        <span>{player}</span>
                        <button onClick={clickHandler} data-value="team1" data-player={player}>Team 1</button>
                        <button onClick={clickHandler} data-value="team2" data-player={player}>Team 2</button>
                      </li>
                    </>
                  ))} 
            </ul>
            
            <Team players={teamOne} teamName="Team One"/>
            <Team players={teamTwo} teamName="Team Two"/>
            
        </div>;
};

export default App;
