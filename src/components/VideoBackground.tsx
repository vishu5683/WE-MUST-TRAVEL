import React from 'react';
import { Box } from '@mui/material';

interface VideoBackgroundProps {
  src: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src }) => {
  return (
    <Box
      component="video"
      src={src}
      autoPlay
      loop
      muted
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
  );
};

export default VideoBackground;
