import React from 'react';
import VideoItem from './VideoItem';

//Function component
//({videos}) ES6 desestructuring 
const VideoList = ({videos, onVideoSelect }) => {

    // Run 1x for each video
    //Returns all video itens and saves on renderedList
    //Passing the function onVideoSelect from APP->VideoList->VideoItem
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId} />
    });

    //And renderedList is returned rendering all the stuff
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;