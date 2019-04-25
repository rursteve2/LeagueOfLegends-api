import React, { Component } from "react";
import champions from "../champions";
let arr=[]
class Info extends Component {
  
  loopThroughChampions() {
    arr=[]
    let { arr } = this.props
    console.log(arr)
    return arr.map((el) => (
      <div className="infodiv" style={{
        float: el.participants.teamId === 200 ? "left" : "right"
        // display: "block",
        // flex: "1",
        // paddingLeft: el.participants.teamId === 200 ? "10px" : "0",
        // paddingRight: el.participants.teamId === 200 ? "0" : "10px"
        }}>
      <p style={{color: el.participants.teamId === 200 ? "#3AA8E3" : "red"}}>{(el.participants.teamId === 200) ? "Team Blue" : "Team Red"}</p>
      <p className="playernames">{el.players.player.summonerName}</p>
      <p style={{textShadow: el.participants.stats.win ? ("-2px 0 #33d63e, 0 2px #33d63e, 2px 0 #33d63e, 0 -2px #33d63e") : ("-1px 0 #ba2e21, 0 1px #ba2e21, 1px 0 #ba2e21, 0 -1px #ba2e21")}}>{(el.participants.stats.win == true) ? "Win" : "Lose"}</p>
      <h4>{el.participants.stats.kills}/{el.participants.stats.deaths}/{el.participants.stats.assists}</h4>
      <img className="selectedgameicon" src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${el.datakey.image.full}`} alt=""/>
      </div>
    ))
  }

  render() {
    return (
      <div className="info">
      <h1 className="infoheader">Game Information</h1>
        {this.props.currentMatchDetails && this.loopThroughChampions()}
        {/* {match} */}
      </div>
    );
  }
}

export default Info;
