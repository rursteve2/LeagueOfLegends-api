import React, { Component } from "react";
import champions from "../champions";

class Row extends Component {
  changeGameInfo = (e, index, id) => {
    console.log(id);
    e.stopPropagation();
    // console.log(e)
    // console.log(this.props)
    let { displayMatches } = this.props;
    // console.log(displayMatches[index]);
    // return this.props.displayMatches.map((el) => {
    // console.log(displayMatches[index].gameId)
    this.props.setCurrentMatchId(displayMatches[index].gameId)
    this.props.getMatchData()
    this.props.setBackgroundImage(id)
}

  loopThroughChampions() {
    let data = champions.champions.data;

    return this.props.displayMatches.map((el, i) => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          // console.log(data[key])
          if (data[key].key == this.props.displayMatches[i].champion) {
            // console.log(data[key]);
            // console.log(this.props.displayMatches);
            // this.props.setBackgroundImage(data[key].id)
            return (
              <div key={i} id={data[key].id} onClick={e => this.changeGameInfo(e, i, data[key].id)} className="rowdiv">
                <h3>{data[key].id}</h3>
                <h4>{data[key].title}</h4>
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
