import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';
import restaurant2 from '../../assets/restaurante-fake2.jpg';
import restaurant3 from '../../assets/restaurante-fake3.jpg';
import restaurant4 from '../../assets/restaurante-fake4.jpg';

import { ImageCard, Map, Modal, RestaurantCard } from '../../components';

import { CarouselTitle, Container, Corousel, Logo, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
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
            <ImageCard photo={restaurant} title="Nome sei lá" />
            <ImageCard photo={restaurant2} title="Nome sei lá" />
            <ImageCard photo={restaurant3} title="Nome sei lá" />
            <ImageCard photo={restaurant4} title="Nome sei lá" />
            <ImageCard photo={restaurant} title="Nome sei lá" />
            <ImageCard photo={restaurant4} title="Nome sei lá" />
            <ImageCard photo={restaurant3} title="Nome sei lá" />
            <ImageCard photo={restaurant2} title="Nome sei lá" />
          </Corousel>
        </Search>

        <RestaurantCard />
      </Container>

      <Map query={query} />

      {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} /> */}
    </Wrapper>
  );
};

export default Home;
