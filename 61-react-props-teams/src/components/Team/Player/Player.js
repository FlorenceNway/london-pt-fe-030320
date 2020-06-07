import React,{useState} from "react";
import './Player.css';

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

const Player = (props) => {
  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([]) 

  const clickHandler = (e) => {
    const value = e.target.dataset.value
    const playerName = e.target.dataset.player
    
    if(value === "team1") {
      setTeamOne([...teamOne, playerName])
    }
    else if(value === "team2") {
      setTeamTwo([...teamTwo, teamTwo.push(playerName)])
    }
    console.log(teamOne)
    console.log(teamTwo)
  }


  const {player, value} = props
  return <li className='player'>
            <span>{player}</span>
            <button onClick={clickHandler} data-value="team1" data-player={player}>Team 1</button>
            <button onClick={clickHandler} data-value="team2" data-player={player}>Team 2</button>
          </li>
};

export default Player;
