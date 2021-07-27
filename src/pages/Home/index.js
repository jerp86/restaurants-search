import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';
import restaurant2 from '../../assets/restaurante-fake2.jpg';
import restaurant3 from '../../assets/restaurante-fake3.jpg';
import restaurant4 from '../../assets/restaurante-fake4.jpg';

import { ImageCard } from '../../components';

import { CarouselTitle, Container, Corousel, FutureMap, Logo, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" loading="lazy" />

          <TextField
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            outlined>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
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
      </Container>

      <FutureMap />
    </Wrapper>
  );
};

export default Home;
