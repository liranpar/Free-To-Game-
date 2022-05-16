import React from "react";
import GamePreview from "./GamePreview";

export default function GameList({ games }) {
  return (
    <section className="game-list">
      {games.map((game) => (
        <GamePreview game={game} key={game.id} />
      ))}
    </section>
  );
}
