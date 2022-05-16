import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GameList from "../cmps/GameList";
import GameFilter from "../cmps/GameFilter";
import { gameServise } from "../services/gameService";

class _GameApp extends Component {
  state = {
    gamesForDisplay: null,
    filterBy: null,
    newGame: "",
    categories: null,
    firstRender: true,
  };

  componentDidMount() {
    this.loadGames();
  }

  async loadGames(filterBy = null) {
    const gamesForDisplay = await gameServise.query(filterBy);
    if (this.state.firstRender) {
      const allCategories = gamesForDisplay.map((g) => g.genre);
      const categories = [];
      allCategories.forEach((c) => {
        if (!categories.includes(c)) categories.push(c);
      });
      this.setState({ categories });
      this.setState({ firstRender: false });
      console.log(gamesForDisplay);
    }

    this.setState({ gamesForDisplay });
  }

  addNewGame = async (ev) => {
    ev.preventDefault();
    const { newGame } = this.state;
    if (!newGame) return;

    const game = { text: newGame };
    this.setState({ newGame: "" });
    await gameServise.saveGame(game);
    this.loadGames();
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value || "" : target.value;
    this.setState({ [field]: value });
  };

  onFilter = (filteBy) => {
    this.loadGames(filteBy);
  };

  render() {
    const { gamesForDisplay, categories } = this.state;

    if (!gamesForDisplay) return <div>Loading..</div>;

    return (
      <section className="game-app main-layout">
        <GameFilter onFilter={this.onFilter} categories={categories} />
        <GameList games={gamesForDisplay} />
      </section>
    );
  }
}

export const GameApp = withRouter(_GameApp);
