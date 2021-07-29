import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import fakeRestaurant from '../../assets/restaurante-fake.png';

import { ImageCard, Map, Modal, RestaurantCard } from '../../components';

import { CarouselTitle, Container, Corousel, Logo, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: false,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" loading="lazy" />

          <TextField
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            outlined>
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>

          <CarouselTitle>Na sua Área</CarouselTitle>
          <Corousel {...settings}>
            {restaurants.map((restaurant) => (
              <ImageCard
                photo={restaurant.photos ? restaurant.photos[0].getUrl() : fakeRestaurant}
                title={restaurant.name}
              />
            ))}
          </Corousel>
        </Search>

        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </Container>

      <Map query={query} />

      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
