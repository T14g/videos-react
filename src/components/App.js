import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component{

    state = { videos: [], selectedVideo: null }

    //Callback when submit the form
    //Search is a endpoint of API lol
    //Assync usa promisse ou assync way syntax
    //assync await
    onTermSubmit = async (term) => {

        //Youtube is a instance of axios you imported it above lol
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });


        //Só vai setar quando receber a resposta por ser async
        this.setState({ videos : response.data.items })
    };

    //Callback on video selected, disparado quando selecionar um video no VideoList
    onVideoSelect = video => {
        console.log('From the app!', video);
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
          
}

export default App; 