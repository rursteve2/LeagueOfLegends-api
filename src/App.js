import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Column from "./components/Column";
import champions from "./champions"


const API_KEY = process.env.REACT_APP_RIOT_API_KEY
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "rursteve2",
      accountId: null,
      id: null,
      data: null,
      puuid: null,
      summonerLevel: null,
      matchData: null,
      currentMatchId: null,
      currentMatchPlayers:[],
      championInfo: champions

    };
  }

   async getUserName() {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.state.username}?api_key=${API_KEY}`
    );
    const data = response.data;
    this.setState({
      id: data.id,
      accountId: data.accountId,
      data: data,
      puuid: data.puuid,
      summonerLevel: data.summonerLevel
    });
    this.getMatchListData()
  }

  async getMatchListData() {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${this.state.accountId}?api_key=${API_KEY}`)
    const data = response.data
    this.setState({
      matchData: data.matches,
      currentMatchId: data.matches[0].gameId
    })
    this.getMatchData()
  }

  async getMatchData() {
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/match/v4/matches/${this.state.currentMatchId}?api_key=${API_KEY}`)
    const data = response.data
    this.setState({
      currentMatchPlayers: data.participantIdentities
    })
    console.log(this.state)
  }
  componentDidMount() {
    this.getUserName();
  }

  render() {
    let { data } = this.state;
    return (
      <div>
        { data ? 
          <React.Fragment>
           <Header username={this.state.username} summonerLevel={this.state.summonerLevel}/>
           <Column 
           matchData={this.state.matchData} 
           currentMatchPlayers={this.state.currentMatchPlayers}
           championInfo={this.state.championInfo}
           />
          </React.Fragment>
          : <h1>Loading...</h1>}
      </div>
    );
  }
}

export default App;
