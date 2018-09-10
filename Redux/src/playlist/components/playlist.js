import React from 'react';
import MediaContainer from '../containers/media.js'
import './playlist.css'

function Playlist(props){
  return(
    <div className="Playlist">
      {
        props.playlist.map( (mediaId) => {
          return(
            <MediaContainer
              id={mediaId}
              key={mediaId}
              openModal = {props.handleOpenModal}
            />
          )
        })
      }
    </div>
    )
}
export default Playlist
