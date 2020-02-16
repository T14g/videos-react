import './VideoItem.css';
import React from 'react';

//Arrow function para poder passar o video em parâmetro na onClick
//Sem arrow function não passaria o video de parâmetro


const VideoItem = ({video, onVideoSelect }) =>{
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video) }>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
        
    );
}

export default VideoItem;