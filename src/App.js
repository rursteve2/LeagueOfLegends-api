import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Column from "./components/Column";
import champions from "./champions";
import Info from "./components/Info";

const API_KEY = process.env.REACT_APP_RIOT_API_KEY;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      accountId: null,
      id: null,
      data: null,
      puuid: null,
      summonerLevel: null,
      matchData: null,
      currentMatchId: null,
      currentMatchPlayers: [],
      championInfo: champions,
      currentMatchDetails: null,
      displayMatches: [],
      backgroundImg: "Aatrox",
      allInfo: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.getMatchData = this.getMatchData.bind(this);
  }

  async setAllInfo() {
    let arr = [];
    let data = champions.champions.data;
    for (
      let i = 0;
      i < this.state.currentMatchDetails.participants.length;
      i++
    ) {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          if (
            data[key].key ==
            this.state.currentMatchDetails.participants[i].championId
          ) {
            arr.push({
              datakey: data[key],
              participants: this.state.currentMatchDetails.participants[i],
              players: this.state.currentMatchDetails.participantIdentities[i]
            });
          }
        }
      }
    }
    await this.setState({
      allInfo: arr
    });
  }

  getSomeMatches() {
    let matches = [];
    for (let i = 0; i < 10; i++) {
      matches.push(this.state.matchData[i]);
    }
    this.setState({
      displayMatches: matches
    });
  }

  async getUserName() {
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${
          this.state.username
        }?api_key=${API_KEY}`
      );
      const data = response.data;
      this.setState({
        username: data.name,
        id: data.id,
        accountId: data.accountId,
        data: data,
        puuid: data.puuid,
        summonerLevel: data.summonerLevel
      });
      await this.getMatchListData();
    } catch (e) {}
  }

  async getMatchListData() {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${
        this.state.accountId
      }?api_key=${API_KEY}`
    );
    const data = response.data;
    this.setState({
      matchData: data.matches,
      currentMatchId: data.matches[0].gameId
    });
    await this.getMatchData();
  }

  async getMatchData() {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${
        this.state.currentMatchId
      }?api_key=${API_KEY}`
    );
    const data = response.data;
    this.setState({
      currentMatchPlayers: data.participantIdentities,
      currentMatchDetails: data
    });
    this.getSomeMatches();
    this.setAllInfo();
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  setUserName = async () => {
    await this.getUserName();
  };

  componentWillMount() {
    this.getUserName();
  }

  setCurrentMatchId = id => {
    this.setState({
      currentMatchId: id
    });
  };
  setBackgroundImage = name => {
    this.setState({
      backgroundImg: name
    });
  };

  render() {
    let { data } = this.state;
    // return !this.state.username ? <Header /> :
    return (
      <React.Fragment>
        {data ? (
          <React.Fragment>
            <Header
              style="header"
              username={this.state.data.name}
              summonerLevel={this.state.summonerLevel}
              data={this.state.data}
              handleChange={this.handleChange}
              setUserName={this.setUserName}
            />
            <div
              className="container"
              style={{
                backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
                  this.state.backgroundImg
                }_0.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100% auto"
              }}
            >
              <Column
                matchData={this.state.matchData}
                currentMatchPlayers={this.state.currentMatchPlayers}
                championInfo={this.state.championInfo}
                displayMatches={this.state.displayMatches}
                setCurrentMatchId={this.setCurrentMatchId}
                getMatchData={this.getMatchData}
                setBackgroundImage={this.setBackgroundImage}
              />
              <Info
                matchData={this.state.matchData}
                currentMatchPlayers={this.state.currentMatchPlayers}
                championInfo={this.state.championInfo}
                currentMatchDetails={this.state.currentMatchDetails}
                arr={this.state.allInfo}
              />
            </div>
          </React.Fragment>
        ) : (
          <Header
            style="preheader"
            summonerLevel={this.state.summonerLevel}
            data={this.state.data}
            handleChange={this.handleChange}
            username={this.state.username}
            setUserName={this.setUserName}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
