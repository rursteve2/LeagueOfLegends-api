import React, { Component } from "react";
import icons from "../icons";

class Header extends Component {
  loopThroughIcons() {
    let data = icons.data;
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        if (data[key].id === this.props.data.profileIconId) {
          return (
            <div>
              <img
                className="pficon"
                src={`http://ddragon.leagueoflegends.com/cdn/9.10.1/img/profileicon/${
                  data[key].image.full
                }`}
                alt=""
              />
            </div>
          );
        }
      }
    }
  }

  submitUserName(e) {
    e.preventDefault();
    this.props.setUserName();
  }
  render() {
    return (
      <div className={this.props.style}>
        <h1 className="headerusername">{this.props.dataname}</h1>
        <h2 className="headerhead">Level: {this.props.summonerLevel}</h2>
        {this.props.data && this.loopThroughIcons()}
        <form onSubmit={e => this.submitUserName(e)}>
          <input
            onChange={e => this.props.handleChange(e)}
            name="username"
            value={this.props.username}
            placeholder="Username"
          />
          <button>Search for Player</button>
        </form>
      </div>
    );
  }
}

export default Header;
