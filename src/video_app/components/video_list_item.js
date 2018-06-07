
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    // const video = props.video; (props)
    // basically same as {video}
    // const video = props.video;

    // console.log("[videolistitem]", video);

    // CSS: mostly bootstrap classes except video-list and media?

    return (
        <li onClick={() => onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url} />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );

};

export default VideoListItem;