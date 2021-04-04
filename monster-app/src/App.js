import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( users => this.setState( {monsters: users} ) )
  }
  // fetching from URL - taking the response and converting it into JSON format that JS can understand
  // then taking users from response and set monsters to that array of users

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    // Equivalent to const monsters = this.state.monsters
    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) );
    // filter() creates a new array
    // tolowercase makes search not case sensitive
    // includes() checks if string value is actually in the string its being called on

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='search monsters'
        handleChange={ this.handleChange }
        />
        <CardList monsters={filteredMonsters} />
    </div>
    );
  }
}

export default App;
