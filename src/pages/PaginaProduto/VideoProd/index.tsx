import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import styles from './VideoProd.module.scss'
export default function VideoProd({video}: any) {
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
          src={video}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

