import React, { Component } from "react";
import Row from "./Row";

class Column extends Component {
  render() {
    return (
      <div className="column">
        <h1 className="columnheader">Most Recent Games</h1>
        <Row
          matchData={this.props.matchData}
          championInfo={this.props.championInfo}
          currentMatchPlayers={this.props.currentMatchPlayers}
          displayMatches={this.props.displayMatches}
          setCurrentMatchId={this.props.setCurrentMatchId}
          getMatchData={this.props.getMatchData}
          setBackgroundImage={this.props.setBackgroundImage}
        />
      </div>
    );
  }
}

export default Column;
