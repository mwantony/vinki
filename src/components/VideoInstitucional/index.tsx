import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import styles from './VideoInstitucional.module.scss'

const VideoPlayer = () => {
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    const player = new Plyr('#player', {
      // You can customize the player options here, if needed
    });

    // Store the Plyr player instance in the ref
    playerRef.current = player;

    return () => {
      // Clean up Plyr player on component unmount
      player.destroy();
    };
  }, []);

  return (
    <div className={styles['video-player']}>
      <video id="player" playsInline controls>
        <source
          src="https://cdn.discordapp.com/attachments/1132014868820656168/1133841104312209598/Video_sem_titulo_-_Made_with_Clipchamp_2.mp4 "
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
