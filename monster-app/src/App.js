import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( users => this.setState( {monsters: users} ) )
  }
  // fetching from URL - taking the response and converting it into JSON format that JS can understand
  // then taking users from response and set monsters to that array of users

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map( monster => <h1 key={ monster.id }> { monster.name } </h1> )
        }
    </div>
    );
  }
}

export default App;
