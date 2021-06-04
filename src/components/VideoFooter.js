import React from 'react';
import "./styles/VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

const VideoFooter = () => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@rookas</h3>
                <p>This is some description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>This is happy song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>

            <img className="videoFooter__record" src="https://static.thenounproject.com/png/934821-200.png" alt=""/>
        </div>
    );
};

export default VideoFooter;
