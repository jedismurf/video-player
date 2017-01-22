import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const title = video.snippet.title;
    const imageUrl = video.snippet.thumbnails.default.url
    
    return(
        <li onClick={ () => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={ imageUrl } />
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    <h5>{ title }</h5>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;