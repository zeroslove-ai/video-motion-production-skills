import React from 'react';
import {Composition} from 'remotion';
import {VideoMotionR1} from './VideoMotionR1';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="VideoMotionR1"
      component={VideoMotionR1}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
