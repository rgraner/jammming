import React from 'react';
import './Playlist.css'
import { TrackList } from '../TrackList/TrackList'

export class PlayList extends React.Component {
    render() {
        return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            {/* Add a TrackList component */}
            <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
        )
        
    }
}