import React, {useRef, useState} from 'react';
import "./styles/Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

const Video = ({url, song, channel, description, likes, shares, messages}) => {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        // if the video is playing, stop it, otherwise continue playing it
        if(playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true);
        }

    }

    return (
        <div className="video">
            <iframe onClick={handleVideoPress} ref={videoRef} className="video__player" width="500" height="800" src={url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>

            </iframe>

            <VideoSidebar likes={likes} shares={shares} messages={messages} />
            <VideoFooter channel={channel} description={description} song={song} />

        </div>
    );
};

export default Video;
