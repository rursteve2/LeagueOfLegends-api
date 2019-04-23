import React, { Component } from 'react';


class Header extends Component {

submitUsername(e) {
    e.preventDefault()
    this.setState({
        username: e.target.value
    })
}
  render() {
    return (
      <div>
          <form>
              <h1>{this.props.username}</h1>
              <h2>Level: {this.props.summonerLevel}</h2>
            <input placeholder="Username"></input>
            <button type="submit" onClick={()=> this.submitUsername()}>Username</button>
          </form>
      </div>
    );
  }
}

export default Header;
