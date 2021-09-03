import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";

import PLayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_daily }, dispatch] = useStateValue();
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcSmbIEZsrXrw`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_daily?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_daily?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PLayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavouriteIcon fontSize="Large" />
          <MoreHorizIcon />
        </div>

        {/* List of songs */}
        {discover_daily?.tracks.items.map((item) => (
          <SongRow track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;
