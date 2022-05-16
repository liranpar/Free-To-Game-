import React, { Component } from "react";
import { Link } from "react-router-dom";
import { gameServise } from "../services/gameService";
import { utilService } from "../services/utilService";

export class Details extends Component {
  state = {
    game: null,
  };

  componentDidMount() {
    this.loadGame();
  }

  async loadGame() {
    const game = await gameServise.getById(this.props.match.params.gameId);

    this.setState({ game });
  }

  render() {
    const { game } = this.state;

    if (!game) return <div className="main-layout">Loading..</div>;
    const timeForDisplay = utilService.dateForDisplay(game.createdAt);

    return (
      <section className="details main-layout">
        <Link to="/">Back to list</Link>
        <h1>{game.title}</h1>
        <p>By {game.publisher}</p>
        <p>{game.genre}</p>
        <p>{game.short_description}</p>
        <img src={game.thumbnail} alt="" />
        <h1
          className="play-link"
          onClick={() => window.open(game.game_url, "_blank")}
        >
          Play game!
        </h1>
      </section>
    );
  }
}
