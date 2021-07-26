import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import Slider from 'react-slick';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';
import restaurant2 from '../../assets/restaurante-fake2.jpg';
import restaurant3 from '../../assets/restaurante-fake3.jpg';
import restaurant4 from '../../assets/restaurante-fake4.jpg';

import { CarouselTitle, Container, FutureMap, Logo, Search, Wrapper } from './styles';

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
          <Slider {...settings}>
            <div>
              <img src={restaurant} alt="Fake Restaurant 1" />
            </div>
            <div>
              <img src={restaurant2} alt="Fake Restaurant 2" />
            </div>
            <div>
              <img src={restaurant3} alt="Fake Restaurant 3" />
            </div>
            <div>
              <img src={restaurant4} alt="Fake Restaurant 4" />
            </div>
            <div>
              <img src={restaurant} alt="Fake Restaurant 5" />
            </div>
            <div>
              <img src={restaurant3} alt="Fake Restaurant 6" />
            </div>
            <div>
              <img src={restaurant2} alt="Fake Restaurant 7" />
            </div>
            <div>
              <img src={restaurant4} alt="Fake Restaurant 8" />
            </div>
          </Slider>
        </Search>
      </Container>

      <FutureMap />
    </Wrapper>
  );
};

export default Home;
