import React, { Component } from 'react';
import App from "../App"
import Header from "./Header"
class Preheader extends Component {
    constructor() {
        super ()
        this.state = {
            username:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    renderApp(e) {
        e.preventDefault();
        e.stopPropagation()
        // this.setState({
        //     username: e.target.value
        // })
        console.log(e.target.value)
    }
    handleChange(e) {
        e.stopPropagation()
        let { value } = e.target;
        this.setState({username: value});
        console.log(e.target.value)

      }
  render() {
    return !this.state.username ? (
      <div className="preheader">
          {/* <form onSubmit={() => this.renderApp()} className="preheaderform">
              <input placeholder="Username">
              </input>
              <button>
                Search for Player
              </button>
          </form> */}
        <Header handleChange={this.handleChange}/>
      </div>
    ) : <App username={this.state.username}/>

  }
}

export default Preheader;
