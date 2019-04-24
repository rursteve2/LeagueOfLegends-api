import React, { Component } from "react";
import champions from "../champions";

class Info extends Component {
  loopThroughChampions() {
    let arr=[]
    let data = champions.champions.data;
    for (let i = 0; i < this.props.currentMatchDetails.participants.length; i++) {
      // console.log(this.props.currentMatchDetails);
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (
            data[key].key ==
            this.props.currentMatchDetails.participants[i].championId
          ) 
          { 
            arr.push({'datakey':data[key], 'participants':this.props.currentMatchDetails.participants[i],
            'players': this.props.currentMatchDetails.participantIdentities[i]
          }) 

          }
        }
      }
    }
    console.log(arr)
    return arr.map((el) => (
      <div>
      <p>{(el.participants.teamId === 200) ? "Team Blue" : "Team Red"}</p>
      <p className="playernames">{el.players.player.summonerName}</p>
      <h4>{el.participants.stats.kills}/{el.participants.stats.deaths}/{el.participants.stats.assists}</h4>
      <img className="selectedgameicon" src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${el.datakey.image.full}`} alt=""/>
      </div>
      // console.log(el.datakey.id, el.participants.championId)

    ))
  }

  render() {
   
    return (
      <div className="info">
      <h1>Game Information</h1>
        {this.props.currentMatchDetails && this.loopThroughChampions()}
        {/* {match} */}
      </div>
    );
  }
}

export default Info;
