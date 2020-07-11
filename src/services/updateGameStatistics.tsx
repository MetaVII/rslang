import { getStatistic, createStatistic } from "./statistic";


interface updateGameStatistics {
  gameName: string; // speakIt, savannah, audioCall,sprint, puzzle, ownGame
  date: string;
  statistics: any;
}
async function updateGameStatistics(update :updateGameStatistics) {
  // get statistic from back, update it, then send back
  const currStat = await getStatistic();
  if (currStat.error || !currStat) return;
  const newStat = {
    ...currStat,
    optional: {
      ...currStat.optional,
      games: {
        ...currStat.optional.games,
        puzzle: {
          ...currStat.optional.games.puzzle,
          lastPlay: update.date,
          statistics: update.statistics,
        }
      }
    }
  };
  createStatistic(newStat);
}

export default updateGameStatistics;