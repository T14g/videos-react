import axios from 'axios';

const KEY = 'AIzaSyCZ5LQ87JmUZ7GgMouvU9qPYAtWMawjQGE';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults : 5,
        key: `${KEY}`
    }
});