import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GameList from "../cmps/GameList";
import GameFilter from "../cmps/GameFilter";
import { gameServise } from "../services/gameService";

class _Favorites extends Component {
  state = {
    gamesForDisplay: null,
  };

  componentDidMount() {
    this.loadGames();
  }

  async loadGames() {
    const gamesForDisplay = await gameServise.query({ favorites: true });
    this.setState({ gamesForDisplay });
  }

  render() {
    const { gamesForDisplay } = this.state;

    if (!gamesForDisplay) return <div>Loading..</div>;

    return (
      <section className="game-app main-layout">
        <GameList games={gamesForDisplay} />
      </section>
    );
  }
}

export const Favorites = withRouter(_Favorites);
