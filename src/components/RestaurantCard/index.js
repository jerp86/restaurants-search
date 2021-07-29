import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

import fakeRestaurant from '../../assets/restaurante-fake.png';
import theme from '../../theme';

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
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
    />
  </Restaurant>
);

export default RestaurantCard;
