import React, { Component } from 'react';
import champions from '../champions'

class Row extends Component {

//  getChampionMatch() {
//   //  for (i = 0; i < this.props.championInfo.length)
//   this.props.championInfo.find((ele) => {
//     return ele.data.
//   })
//  }
//  loopThroughMatchData() {
//    for(let i = 0; i < this.props.matchData.length; i++) {
//     console.log(this.props.matchData[i].champion)
//    }
//  }

loopThroughChampions() {
  //  for(let i = 0; i < Object.keys(champions.champions.data).length; i++) {
  //    console.log(champions.champions.data[i])
  //  }
  let data = champions.champions.data

  for(let i = 0; i < this.props.displayMatches.length; i++) {
    console.log(this.props.displayMatches[i].champion)
   
    for(let key in data) {
      if (data.hasOwnProperty(key)) {
        // console.log(data[key])
        if (data[key].key == this.props.displayMatches[i].champion) {
          console.log(data[key])
          console.log(this.props.displayMatches)
          this.props.displayMatches.map((el) => {
          return(
            <div>
            <h3>{data[key].id}</h3>
            <p>{el.champion}</p>
            <img src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${data[key].image.full}`} alt="" />

            </div>
          )}
          )
        }

      }
    }
  }
  // console.log(champions.champions.data)
 }


  render() {
    // const { currentMatchPlayers } = this.props;
    // let match = currentMatchPlayers ? currentMatchPlayers.map((ele) => (
      
    //   <div className='row'>
    //     {/* <img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${data.}`} /> */}
    //     {/* <h3>{() => this.loopThroughPlayers()}</h3> */}
    //     <h3>{ele.player.summonerName}</h3>
    //   </div>
    // )) : null
    // console.log(this.props.currentMatchPlayers)
    return (
      <div>
        
        {this.props.matchData && this.loopThroughChampions()}
      </div>
    );
  }
}

export default Row;
