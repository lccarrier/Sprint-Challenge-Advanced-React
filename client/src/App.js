import React from 'react';
import Players from './Players';
import styled from 'styled-components'
import Bubble from './Bubble'

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
        <StyledWrap>
          <h1>Women's World Cup Players</h1>
          <Bubble />
        </StyledWrap>
        <Players data={this.state.data} />
      </div>
    );
  }
}



const StyledWrap = styled.div`
  display: flex;
  align-items: center;
`

export default App;
