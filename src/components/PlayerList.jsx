import Player from "./Player"

export default function PlayerList(props) {
  const {players, playerWins} = props

  const listOfPlayers = Object.values(players).map(player => (
    <Player player={player} wins={playerWins[player.gamerTag]} key={player.gamerTag}/>
  ))
  
  return(
    <section className="PlayerList">
      {listOfPlayers}
    </section>
  )
}