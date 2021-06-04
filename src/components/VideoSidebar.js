import React, {useState} from 'react';
import "./styles/VideoSidebar.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

const VideoSidebar = ({likes, shares, messages}) => {

    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteIcon onClick={(e) => setLiked(false)} fontSize="large" />
                    ) : (
                    <FavoriteBorderIcon onClick={(e) => setLiked(true)} fontSize="large" />

                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>

            <div className="videoSidebar__button">
                <ChatIcon fontSize="large" />
                <p>{shares}</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{messages}</p>
            </div>

        </div>
    );
};

export default VideoSidebar;
