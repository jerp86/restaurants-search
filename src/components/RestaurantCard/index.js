import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Address, Restaurant, RestaurantInfo, Title } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={3.5} edit={false} activeColor="#E7711C" />
      <Address>Avenida Universitária, 2376</Address>
    </RestaurantInfo>
  </Restaurant>
);

export default RestaurantCard;
