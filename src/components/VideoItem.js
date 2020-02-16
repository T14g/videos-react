import './VideoItem.css';
import React from 'react';

//Arrow function enables you to pass the video as a function parameter
//otherwise you would be calling it without parameters

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