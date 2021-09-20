import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filterMonsters: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ filterMonsters: e.target.value });
  };

  render() {
    const { monsters, filterMonsters } = this.state;
    const get__filtermonster = monsters.filter((monsterfilter) =>
      monsterfilter.name.toLowerCase().includes(filterMonsters.toLowerCase())
    );

    return (
      <div className="container">
        <h1 className="container__title">Monsters rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList name="card-list" monsters={get__filtermonster} />
      </div>
    );
  }
}

export default App;
