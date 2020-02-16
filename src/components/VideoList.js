import React from 'react';
import VideoItem from './VideoItem';

//Function component
//({videos}) ES6 desestructuring 
const VideoList = ({videos, onVideoSelect }) => {

    // Run 1x para cada objeto do array 
    //Retorna um Vídeo Item para cada e salva tudo nessa constante
    //Passar a função onVideoSelect que veio do APP->VideoList->VideoItem
    const renderedList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />
    });

    // E a constante é chamada na tela dando render no HTML 
    return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;