import React, { Component } from 'react';
import icons from '../icons'

class Header extends Component {

    loopThroughIcons() {

       let data = icons.icons.data
    //    console.log(icons.icons.data)

         for(let key in data) {
           if (data.hasOwnProperty(key)) {
             if (data[key].id == this.props.data.profileIconId) {
            //    console.log(data[key])
               return(
                 <div>
                 {/* <h3>{data[key].id}</h3> */}
                 <img className='pficon' src={`http://ddragon.leagueoflegends.com/cdn/9.8.1/img/profileicon/${data[key].image.full}`} />
                 </div>
               )
             }
     
           }
         }
    //    }
      }


submitUserName(e) {
    e.preventDefault();
    let { value } = e.target;
    console.log(e.target);
    this.props.setUserName()

}
  render() {
    return (
      <div className="header">
          <h1>{this.props.username}</h1>
              <h2>Level: {this.props.summonerLevel}</h2>
              {this.props.username && this.loopThroughIcons()}
          <form onSubmit={e => this.submitUserName(e)}>
            <input onChange={e => this.props.handleChange(e)} name="username" value={this.props.username} placeholder="Username"></input>
            <button>Search for Player</button>
          </form>
      </div>
    );
  }
}

export default Header;
