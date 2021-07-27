import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';

import restaurant from '../../assets/restaurante-fake.png';
import theme from '../../theme';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={3.5} edit={false} activeColor={theme.colors.star} />
      <Address>Avenida Universitária, 2376</Address>
    </RestaurantInfo>

    <RestaurantPhoto src={restaurant} alt="Foto do restaurante" />
  </Restaurant>
);

export default RestaurantCard;
