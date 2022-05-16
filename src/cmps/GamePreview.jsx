import React, { Component } from "react";
import { Link } from "react-router-dom";
import { utilService } from "../services/utilService";

export default class GamePreview extends Component {
  render() {
    const { game } = this.props;

    return (
      <section>
        <Link className="game-preview" to={`/game/${game.id}`}>
          <img src={game.thumbnail} alt="" />
          <span className="game-text">
            <p className="game-name">{game.title}</p>
            <p className="game-genre">{game.genre}</p>
          </span>
        </Link>
      </section>
    );
  }
}
