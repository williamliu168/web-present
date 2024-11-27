import React from 'react';
import { AUTH_CONFIG } from '@/constants/presentation';

const VideoBackground: React.FC = () => {
  return (
    <>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover opacity-30"
      >
        <source src={AUTH_CONFIG.VIDEO_PATH} type="video/mp4" />
      </video>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm" />
    </>
  );
};

export default VideoBackground;