import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/restaurants-loading.json';

export default () => {
  const defaultOptions = {
    loop: true,
    atutoplay: true,
    animationData,
    rendererSettings: {
      preservedAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};
