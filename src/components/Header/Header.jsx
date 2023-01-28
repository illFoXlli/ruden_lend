import React from 'react';
import { Container } from '../../page/HomePage/HomePage.styled';
import AppBar from '../AppBar';
import Logo from '../Logo/Logo';
import { HeaderWrapper, Wrapper, WrapperLogo } from './Header.styled.js';

const Header = () => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <HeaderWrapper scroll={scroll}>
      <Container>
        <Wrapper>
          <WrapperLogo>
            <Logo />
          </WrapperLogo>
          <AppBar />
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
