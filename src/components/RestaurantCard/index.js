import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Address, Restaurant, RestaurantInfo, Title } from './styles';

import theme from '../../theme';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={3.5} edit={false} activeColor={theme.colors.star} />
      <Address>Avenida Universitária, 2376</Address>
    </RestaurantInfo>
  </Restaurant>
);

export default RestaurantCard;
