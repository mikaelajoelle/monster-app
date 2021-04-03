import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
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
        <CardList monsters={this.state.monsters} />
    </div>
    );
  }
}

export default App;
