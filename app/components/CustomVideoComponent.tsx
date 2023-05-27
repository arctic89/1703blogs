import React from "react";
import styles from './style.module.css'
import Image from 'next/image'

export default function CustomVideoComponent() {
  return (
    <div className="video-container" >
      <video autoPlay loop src={'/videos/1703.mp4'} className={styles.videoFrame} muted/>
      {/* <Image className={styles.logoLeft} src="/1703LOGO.png" alt="big logo" width={400} height={400}/> */}
      {/* <Image className={styles.logoRight} src="/1703LOGO.png" alt="big logo" width={400} height={400}/> */}
    </div>
  );
}
