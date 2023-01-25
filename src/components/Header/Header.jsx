import AppBar from '../AppBar';
import Logo from '../Logo/Logo';
// import AppBarAuth from 'components/AppBarAuth/AppBarAuth.jsx';
// import Logo from 'components/Logo/Logo.jsx';
import { HeaderWrapper, Wrapper } from './Header.styled.js';

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo />
        <AppBar />
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
