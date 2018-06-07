// video list can be functional
// no need for state
//  no user interaction, no need to re-render itself on state changes

import React from 'react';
import VideoListItem from './video_list_item';

// when using functional components, props arrive as arguments to the function
const VideoList = (props) => {

    // set key from video Etag, key needed by React
    const videoItems = props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video}/>
            )
        }
    );

    return(
        <ul className="col-md-4 list-group">
            {/*{props.videos.length || ''}*/}
            {videoItems}
        </ul>
    );
}

export default VideoList;