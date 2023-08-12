import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import styles from './VideoInstitucional.module.scss'
import institucional from 'assets/vid/institucional.mp4'
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
          src={institucional}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
