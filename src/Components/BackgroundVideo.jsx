import React from 'react';
import classes from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "./ClassicRain.mp4" 
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h2>Glitch in the Matrix Counter</h2>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo