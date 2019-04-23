import React, { Component } from 'react';
import Row from './Row'
import Info from './Info'

class Column extends Component {
  render() {
    return (
      <div>
        <Row matchData={this.props.matchData} 
        championInfo={this.props.championInfo}
        currentMatchPlayers={this.props.currentMatchPlayers}
        />
        <Info />
      </div>
    );
  }
}

export default Column;
