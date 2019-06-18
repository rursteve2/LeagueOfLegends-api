import React, { Component } from "react";
import champions from "../champions";

class Row extends Component {
  async changeGameInfo(e, index, id) {
    e.stopPropagation();
    let { displayMatches } = this.props;
    await this.props.setCurrentMatchId(displayMatches[index].gameId)
    await this.props.getMatchData()
    this.props.setBackgroundImage(id)
}

  loopThroughChampions = () => {
    let data = champions.data;
    try {
    return this.props.displayMatches.map((el, i) => {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (data[key].key == this.props.displayMatches[i].champion) {
            return (
              <div key={i} id={data[key].id} onClick={e => this.changeGameInfo(e, i, data[key].id)} className="rowdiv">
                <h3>{data[key].id}</h3>
                <h4>{data[key].title}</h4>
                <img src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${data[key].image.full}`} alt="" />
              </div>
            );
          }
        }
      }
    });
  } catch(e) {
    console.log(e)
    alert("Not enough data available. Please try again with a different username.")
  }
  }

  renderFunction = () => {
    console.log(this.props.displayMatches)
    if (this.props.displayMatches) {
      this.loopThroughChampions()
    } else {
      return("Loading...")
    }
  }

  render() {
    return <div>{this.props.displayMatches[9] ? this.loopThroughChampions() : "Loading..."}</div>;
  }
}

export default Row;
