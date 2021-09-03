import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E36l722Tu1ki6").then((response) => {
        dispatch({
          type: "SET_DISCOVER_DAILY",
          discover_daily: response,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;

/* 
NOTE:
1. useEffect(() => {
    // CODE..
  }, []);
  -> If I want to run the code only once when the App component is loaded, we need to give empty brackets as the second parameter

2. useEffect(() => {
    // CODE..
  }, [name]);
  -> If I want to run the code only once when the App component is loaded as well when the name component changes

3. useState -> Is the way we handle variables in react

4. spotify.getMe() -> returns a promise hence we need to resolve it by using .then()

5. ****************** Problem: Prop Drilling ******************
  -> Not production ready
  -> Tightly Coupled Code -> If we change a piece of code in one area, it will affect the other area
  -> Hence, It is a bad practice
  Solution: Redux or React context API
            React context API - user friendly redux


6. Study DataLayer/StateProvider
- dispatch() will pop in the user into the data layer and we will be pulling it from the datalayer and reading it by console.log()
- dispatch() will dispatch and it will be listened by the listener in reducer.js file
*/

// 37i9dQZEVXcSmbIEZsrXrw
