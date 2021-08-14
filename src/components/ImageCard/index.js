import React, { useEffect, useState } from 'react';

import { pxToRem } from '../../utils';

import Skeleton from '../Skeleton';

import { Card, Title } from './styles';

const ImageCard = ({ photo, title, ...rest }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo} {...rest}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width={pxToRem(90)} height={pxToRem(90)} />
      )}
    </>
  );
};

export default ImageCard;
