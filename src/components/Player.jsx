export default function Player(props){
  const {player, wins} = props
  
  return (
  <article className="Player">
    <h1>
      {player.firstName} {' '}
      {player.gamerTag} {' '}
      {player.lastName}
    </h1>
    {wins === 0 && <h2>Currently with no wins 😠</h2>}
    {wins === 1 && <h2>Currently at 1 win 🤗</h2>}
    {wins >= 2 && <h2>Currently at {wins} wins 🤩</h2>}
  </article>
  )
}