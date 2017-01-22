import React from 'react';

const VideoMain = ({ video }) => {

    if(!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const title = video.snippet.title;
    const description = video.snippet.description;
    const url = `//youtube.com/embed/${ videoId }`;

    return (
        <div className="col-md-8 video-main">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ url } />
            </div>
            <div className="details">
                <div>{ title }</div>
                <div>{ description }</div>
            </div>
        </div>
    );
};

export default VideoMain;