export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing...
  // token:
  //   "BQC-hPceO-RUwu1KDA3AuwylE9SzSvo-eV1VWcZbWzErpU-V7UeidqaHa8sdDEQ6gj5BELtJhdTUWI7mfux4FiPoSBTmlXMu66rSxqlbXOmITywPTwym3rGhc8OQP7YiIErqI_lTBwWi7viCz2jelUQInUYuQ6w5m-JfLffzvHkM_g4O",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_DAILY":
      return {
        ...state,
        discover_daily: action.discover_daily,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
};

export default reducer;
