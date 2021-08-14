import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import Skeleton from '../Skeleton';
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

import fakeRestaurant from '../../assets/restaurante-fake.png';
import theme from '../../theme';
import { pxToRem } from '../../utils';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          value={restaurant.rating}
          edit={false}
          activeColor={theme.colors.star}
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>

      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : fakeRestaurant}
        alt={`Foto de ${restaurant.name}`}
        onLoad={() => setImageLoaded(true)}
        imageLoaded={imageLoaded}
      />

      {!imageLoaded && <Skeleton width={pxToRem(100)} height={pxToRem(100)} />}
    </Restaurant>
  );
};

export default RestaurantCard;
