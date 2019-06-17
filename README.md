# Project 2 - API's

This is a website that pulls data from RIOT Games, for a popular game named League Of Legends.
Enter a username to retrieve information including champions played, past games, and stats from those past games including kill/death/assist statistics.

# Languages used
JavaScript with React, HTML, and CSS

# Usage
To use, enter a valid username in the NA server. If there is no valid API key, create a .env file in the main folder and enter REACT_APP_RIOT_API_KEY={your_api_key_here}

# Wireframes
<img width="1004" alt="PUBG API wireframe 1" src="https://user-images.githubusercontent.com/47332766/56437817-d8a47980-62ae-11e9-826a-ff76d987e658.png">
<img width="1253" alt="PUBG API main info screen" src="https://user-images.githubusercontent.com/47332766/56437818-d8a47980-62ae-11e9-9047-03ff54a20939.png">
<img width="328" alt="PUBG API components heiarchy" src="https://user-images.githubusercontent.com/47332766/56437819-d8a47980-62ae-11e9-9d1f-8ef425e845ff.png">

# API KEY
Retrieved from https://developer.riotgames.com/

# Known Bugs
It will error out if:
1. An invalid username is entered, or a username that is not from the NA server.
2. If the player is currently banned.
3. If the player does not have any match history.

# Deployment
Deployed at https://sei-lol-api.herokuapp.com/