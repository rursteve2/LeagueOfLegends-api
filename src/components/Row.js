import React, { Component } from "react";
import champions from "../champions";

class Row extends Component {
  changeGameInfo = (e, index) => {
    e.stopPropagation();
    console.log(e.target)
    let { displayMatches } = this.props;
    console.log(displayMatches[index]);
    // return this.props.displayMatches.map((el) => {
    console.log(displayMatches[index].gameId)
    this.props.setCurrentMatchId(displayMatches[index].gameId)
    this.props.getMatchData()
  };

  loopThroughChampions() {
    //  for(let i = 0; i < Object.keys(champions.champions.data).length; i++) {
    //    console.log(champions.champions.data[i])
    //  }
    let data = champions.champions.data;

    return this.props.displayMatches.map((el, i) => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          // console.log(data[key])
          if (data[key].key == this.props.displayMatches[i].champion) {
            console.log(data[key]);
            console.log(this.props.displayMatches);
            return (
              <div key={i} onClick={e => this.changeGameInfo(e, i)} className="rowdiv">
                <h3>{data[key].id}</h3>
                {/* <p>{el.champion}</p> */}
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${
                    data[key].image.full
                  }`}
                  alt=""
                />
              </div>
            );
          }
        }
      }
    });
  }

  render() {
    return <div>{this.props.matchData && this.loopThroughChampions()}</div>;
  }
}

export default Row;
