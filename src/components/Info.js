import React, { Component } from "react";
import champions from "../champions";
let arr = [];
class Info extends Component {
  loopThroughBlueChampions() {
    arr = [];
    let { arr } = this.props;
    let arrBlue = arr.map(el => {
      if (el.participants.teamId === 200) {
        return (
          <div className="infodivcontainer">
            <h5>{el.participants.highestAchievedSeasonTier ? el.participants.highestAchievedSeasonTier : "UNRANKED"}</h5>
          <div
            className={
              el.participants.teamId === 200 ? "infodivright" : "infodivleft"
            }
          >
         <div>
          <img
              className="selectedgameicon"
              src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${
                el.datakey.image.full
              }`}
              alt=""
            />
            <div className="statstier">
            </div>
            </div>
            <p className="playernames">{el.players.player.summonerName}</p>
            <p className="winorlose"
              style={{
                textShadow: el.participants.stats.win
                  ? "-2px 0 #33d63e, 0 2px #33d63e, 2px 0 #33d63e, 0 -2px #33d63e"
                  : "-1px 0 #ba2e21, 0 1px #ba2e21, 1px 0 #ba2e21, 0 -1px #ba2e21"
              }}
            >
              {el.participants.stats.win == true ? "Win" : "Lose"}
            </p>
          </div>
          <h4>
              {el.participants.stats.kills}/{el.participants.stats.deaths}/
              {el.participants.stats.assists}
            </h4>
          </div>
        );
      }
    });

    return arrBlue;
  }

  loopThroughRedChampions() {
    arr = [];
    let { arr } = this.props;
    let arrRed = arr.map(el => {
      if (el.participants.teamId != 200) {
        return (
          <div className="infodivcontainer">
            <h5>{el.participants.highestAchievedSeasonTier ? el.participants.highestAchievedSeasonTier : "UNRANKED"}</h5>
          <div
            className={
              el.participants.teamId === 200 ? "infodivright" : "infodivleft"
            }
          >
         <div>
          <img
              className="selectedgameicon"
              src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/champion/${
                el.datakey.image.full
              }`}
              alt=""
            />
            <div className="statstier">
            </div>
            </div>
            <p className="playernames">{el.players.player.summonerName}</p>
            <p className="winorlose"
              style={{
                textShadow: el.participants.stats.win
                  ? "-2px 0 #33d63e, 0 2px #33d63e, 2px 0 #33d63e, 0 -2px #33d63e"
                  : "-1px 0 #ba2e21, 0 1px #ba2e21, 1px 0 #ba2e21, 0 -1px #ba2e21"
              }}
            >
              {el.participants.stats.win == true ? "Win" : "Lose"}
            </p>
          </div>
          <h4>
              {el.participants.stats.kills}/{el.participants.stats.deaths}/
              {el.participants.stats.assists}
            </h4>
          </div>
        );
      }
    });

    return arrRed;
  }

  render() {
    return (
      <div className="info">
        <h1 className="infoheader">Game Information</h1>
        <h2 className="infoheader">Kills/Deaths/Assists</h2>
        <div className="infoinfo">
          <div>
            <h3 className="teamred">Team Red</h3>
            {this.props.currentMatchDetails ? this.loopThroughRedChampions() : "Loading..."}
          </div>
          <div>
            <h3 className="teamblue">Team Blue</h3>
            {this.props.currentMatchDetails ? this.loopThroughBlueChampions() : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
