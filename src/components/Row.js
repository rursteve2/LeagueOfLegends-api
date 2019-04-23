import React, { Component } from 'react';
import champions from '../champions'

class Row extends Component {

//  getChampionMatch() {
//   //  for (i = 0; i < this.props.championInfo.length)
//   this.props.championInfo.find((ele) => {
//     return ele.data.
//   })
//  }
 loopThroughMatchData() {
   for(let i = 0; i < this.props.matchData.length; i++) {
    console.log(this.props.matchData[i].champion)
   }
 }

loopThroughChampions() {
   console.log("hello")
   for(let i = 0; i < Object.keys(champions.champions.data).length; i++) {
     console.log(champions.champions.data[i])
   }
  // console.log(champions.champions.data)
 }


  render() {
    const { matchData, currentMatchPlayers } = this.props;
    let match = currentMatchPlayers ? currentMatchPlayers.map((ele) => (
      
      <div>
        {/* <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.}`} /> */}
        {/* <h3>{() => this.loopThroughPlayers()}</h3> */}
        <h3>{ele.player.summonerName}</h3>
      </div>
    )) : null
    // console.log(this.props.currentMatchPlayers)
    return (
      <div>
        {match}
        {this.props.matchData && this.loopThroughMatchData()}
        {this.props.matchData && this.loopThroughChampions()}
      </div>
    );
  }
}

export default Row;
