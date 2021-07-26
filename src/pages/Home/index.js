import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';

import { CarouselTitle, Container, FutureMap, Logo, Search, Wrapper } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

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
        </Search>
      </Container>

      <FutureMap />
    </Wrapper>
  );
};

export default Home;
