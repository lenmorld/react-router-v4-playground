import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY_YOUTUBE = 'AIzaSyAzTqFRUH7rWXv9X6UJc0yFNI8qs8BKr_M';

// class based component instead of functional, so it can keep track of videos (it needs state)
// props available anywhere in any method as this.props

class VideoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            searchString: 'react tutorial'           // default search
        };        // init to default list of videos

        this.videoSearch(this.state.searchString);

        // HTTP request is async and takes time,
        // between first render and setting the state

        // effects during that time:
        // - this.state.videos.length = 0 -> handle by having an  0 || ''
        // - this.state.videos is undefined at that point -> handle by returning Loading...
    }

    // member method (could be a static method?)
    videoSearch(term) {
        YoutubeSearch({key: API_KEY_YOUTUBE, term: term}, (videos) => {
            // console.log(data);
            // this.setState({ videos });
            // select first video at boot time

            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }


    render() {

        // debounce videoSearch, only call per given ms
        // const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000 );

        return (
            <div>
                <SearchBar
                    onSearchTermChange={
                        term => {
                            this.videoSearch(term);
                        }
                    }/>

                {/*debounced version*/}
                {/*<SearchBar onSearchTermChange={videoSearch}/>*/}

                <br/>

                {/*select first video*/}
                {/*<VideoDetail video={this.state.videos[0]}/>*/}

                {/*selected video*/}
                <VideoDetail video={this.state.selectedVideo}/>

                {/*// update state with a new video, pass function as props*/}

                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// };

// ReactDOM.render(<App />, document.querySelector('.container'));
export default VideoApp;
