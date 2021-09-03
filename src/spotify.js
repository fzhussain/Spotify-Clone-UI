// Not a component but an utility file
// Documentation: // https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize"; // Whenever we click on login button it is gonna redrect me over here

const clientId = "001562686bde4069b40de9bafbd4217e";

const redirectUri = "http://localhost:3000/";

// Scopes - screen what we will be showing will have these functionality listed out
// You are gonna let the spotify user to do use the following
// EG: I won't be allowed to enter into spotify and delete anyting
const scopes = [
  "playlist-read-private",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// %20 - is ascii for space
// Once we get authenticated go ahead and give back a token, token is nothing but a string which represents the authentication.

// http://localhost:3000/#access_token=mysupersecretkey&token_type=Bearer&expires_in=3600

// This is the URL which we get after clicking on agree button on the page after we click login button on the initial page

// window.location.hash -> it goes to the location on the window which is the URL on the current window and go to the hashtag
// substring(1) -> get the first substring and split it on '&' because we don't want any extra parameters into the access token

// .reduce() -> access_token=mysupersecretkey
// Split it on '='

// initial[parts[0]] -> access_token
// decodeURIComponent(parts[1]) -> mysupersecretkey

// In short, it is pulling the access token
