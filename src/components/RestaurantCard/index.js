import React from 'react';

import { Address, Restaurant, RestaurantInfo, Title } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <p>Avaliação</p>
      <Address>Avenida Universitária, 2376</Address>
    </RestaurantInfo>
  </Restaurant>
);

export default RestaurantCard;
