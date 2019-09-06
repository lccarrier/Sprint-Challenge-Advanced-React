import React from 'react';
import Players from './Players';

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(player => this.setState({ data: player }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Women's World Cup Players</h1>
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;
