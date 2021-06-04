import React from 'react';
import "./styles/Video.css";

const Video = () => {
    return (
        <div className="video">
            <iframe className="video__player" width="500" height="800" src="https://www.youtube-nocookie.com/embed/UfGMj10wOzg?controls=0"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

            </iframe>
        </div>
    );
};

export default Video;
