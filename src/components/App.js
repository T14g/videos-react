import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = { videos: [], selectedVideo: null }


    // /search is a endpoint of Youtube API lol
    //This function is passed to SearchBar via props
    //Then fired when you search for something
    onTermSubmit = async (term) => {

        //Youtube is a instance of axios you imported 
        const response = await youtube.get('/search',{
            params: {
                q: term
            }
        });

        //After getting async response...

        //Default selectedVideo : response.data.items[0] 
        //sets the first video of response on screen
        this.setState({ 
            videos : response.data.items,
            selectedVideo : response.data.items[0] 
        })
    };

    //Will be passed via props -> videoList
    onVideoSelect = video => {
        console.log('From the app!', video);
        this.setState({ selectedVideo : video});
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
          
}

export default App; 