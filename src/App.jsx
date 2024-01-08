import  PlayerList  from './components/PlayerList';
import { matches } from './data/matchData';
import { players } from './data/playerData';
import { calculateWins } from './helpers/calculateWins';

import "./App.css"

function App() {
  
  const playerWins = calculateWins(matches, players);

  return (
    <div className="App">
      <PlayerList  players={players} playerWins={playerWins}/>
    </div>
  );

  // return <Player />

  // Logiciel espion
  // Espiogiciel 
}

export default App;
