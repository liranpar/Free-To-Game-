import React, { Component } from "react";

export default class GameFilter extends Component {
  state = {
    title: "",
    sort: "",
    category: "",
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value || "" : target.value;

    this.setState({ [field]: value }, () => {
      this.props.onFilter(this.state);
    });
  };

  render() {
    const { title, sort, category } = this.state;
    const { categories } = this.props;

    if (!categories) return <div>Loading..</div>;

    return (
      <section className="game-filter">
        <input
          placeholder="Search game.."
          onChange={this.handleChange}
          type="text"
          value={title}
          name="title"
        />

        <label htmlFor="category">Category </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={this.handleChange}
        >
          <option value="">All</option>
          {categories.map((c) => (
            <option value={c} key={c}>
              {c}
            </option>
          ))}
        </select>

        {/* <label htmlFor="sort">Sort by </label>
        <select name="sort" id="sort" value={sort} onChange={this.handleChange}>
          <option value=""></option>
          <option value="release_date">Release date</option>
          <option value="title">Name</option>
        </select> */}
      </section>
    );
  }
}
