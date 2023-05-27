import React from "react";
import styles from './style.module.css'

export default function CustomVideoComponent() {
  return (
    <div className="video-container" >
      <video autoPlay loop muted src={require('../../public/videos/1703.mp4')} className={styles.videoFrame} />
    </div>
  );
}
