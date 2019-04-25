import React, { Component } from "react";
import champions from "../champions";

class Row extends Component {
  changeGameInfo = (e, index, id) => {
    console.log(id);
    e.stopPropagation();
    let { displayMatches } = this.props;
    this.props.setCurrentMatchId(displayMatches[index].gameId)
    this.props.getMatchData()
    this.props.setBackgroundImage()
}

  loopThroughChampions() {
    let data = champions.champions.data;

    return this.props.displayMatches.map((el, i) => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (data[key].key == this.props.displayMatches[i].champion) {
            return (
              <div key={i} id={data[key].id} onClick={e => this.changeGameInfo(e, i, data[key].id)} className="rowdiv">
                <h3>{data[key].id}</h3>
                <h4>{data[key].title}</h4>
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
    return <div>{this.props.matchData ? this.loopThroughChampions() : "Loading..."}</div>;
  }
}

export default Row;
