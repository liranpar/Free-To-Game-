import { storageService } from "./storageService";
import axios from "axios";

export const gameServise = {
  query,
  getById,
};

const STORAGE_KEY = "game_db";

async function getById(gameId) {
  const games = await query();
  const game = games.find((g) => g.id === +gameId);
  return new Promise((resolve) => {
    resolve(game);
  });
}

async function query(filterBy = null) {
  let games = storageService.load(STORAGE_KEY);
  if (games?.length) {
    return new Promise((resolve) => {
      if (filterBy) games = _filterGames(games, filterBy);
      resolve(games);
    });
  } else {
    const options = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "8b72e33d76mshd4ee78729754c71p1a3b4bjsn516273fc9800",
      },
    };
    return axios
      .request(options)
      .then((response) => {
        games = response.data;
        storageService.store(STORAGE_KEY, games);
        if (filterBy) games = _filterGames(games, filterBy);
        return games;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function _filterGames(games, filterBy) {
  let filteredGames = games;
  if (filterBy.title) {
    const regex = new RegExp(filterBy.title, "i");
    filteredGames = filteredGames.filter((g) => regex.test(g.title));
  }
  if (filterBy.category) {
    filteredGames = filteredGames.filter((g) => g.genre === filterBy.category);
  }
  // if (filterBy.sort) {
  //   const sortBy = filterBy.sort;
  //   filteredGames.sort((a, b) => {
  //     console.log(a[sortBy]);
  //     return a[sortBy] - b[sortBy];
  //   });
  // }

  return filteredGames;
}
