export function calculateWins(matches, players) {  
  const wins = {}; //wins object to track player's wins

  Object.keys(players).forEach(gamerTag => (wins[gamerTag] = 0))


  matches.forEach(match => { // Iterate through the matches
    if (match.winner) { // If winner, update indv wins count
      wins[match.winner] = (wins[match.winner] || 0) + 1;
    }
  });
  return wins; // Return wins object like {DrSpiteful: 1, Henrikarex: 2, Captain Slimy: 1, H3nr1k4: 1}
}