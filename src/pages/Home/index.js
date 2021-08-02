import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import fakeRestaurant from '../../assets/restaurante-fake.png';

import { ImageCard, Loader, Map, Modal, RestaurantCard } from '../../components';

import {
  CarouselTitle,
  Container,
  Corousel,
  Logo,
  ModalContent,
  ModalTitle,
  Search,
  Wrapper,
} from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: false,
    lazyLoad: 'ondemand',
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  function handleOpenModal(id) {
    setPlaceId(id);
    setModalOpened(true);
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

          {restaurants.length > 0 ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Corousel {...settings}>
                {restaurants.map((restaurant) => (
                  <ImageCard
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : fakeRestaurant}
                    title={restaurant.name}
                  />
                ))}
              </Corousel>
            </>
          ) : (
            <Loader />
          )}
        </Search>

        {restaurants.map((restaurant) => (
          <RestaurantCard
            restaurant={restaurant}
            onClick={() => handleOpenModal(restaurant.place_id)}
          />
        ))}
      </Container>

      <Map query={query} placeId={placeId} />

      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
        <ModalContent>
          {restaurantSelected?.opening_hours?.open_now
            ? 'Aberto agora 🤗️'
            : 'Fechado neste momento 😭️'}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default Home;
