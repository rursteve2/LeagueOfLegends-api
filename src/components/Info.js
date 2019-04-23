import React, { Component } from "react";
import champions from "../champions";

class Info extends Component {
  loopThroughChampions() {
    let data = champions.champions.data;
    for (let i = 0; i < this.props.currentMatchDetails.participants.length; i++) {
      // console.log(this.props.currentMatchDetails.participants[i].championId);
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (
            data[key].key ==
            this.props.currentMatchDetails.participants[i].championId
          ) {
            // console.log(data[key]);
            // console.log(this.props.currentMatchDetails.participants);
            this.props.currentMatchDetails.participants.map((el) => {
              // console.log(el.championId)
              return (
              <div>
                <h3>{el.championId}</h3>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${data[key].image.full}`}
                />
              </div>
              )
              })
          }
        }
      }
    }
  }

  render() {
    // console.log(this.props);
    // const { currentMatchPlayers } = this.props;
    // let match = currentMatchPlayers
    //   ? currentMatchPlayers.map(ele => (
    //       <div className="row">
    //         {/* <img src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${data.}`} /> */}
    //         <h3>{ele.player.summonerName}</h3>
    //       </div>
    //     ))
    //   : null;
    const { currentMatchDetails } = this.props;
    let match = currentMatchDetails
      ? currentMatchDetails.participants.map(ele => (
          <div className="row">
            {/* <img src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${data.}`} /> */}
            <h3>{ele.championId}</h3>
          </div>
        ))
      : null;
    return (
      <div className="info">
      <h1>Info</h1>
        {this.props.currentMatchDetails && this.loopThroughChampions()}
        {match}
      </div>
    );
  }
}

export default Info;
