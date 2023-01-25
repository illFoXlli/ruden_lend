import {
  Button,
  Rectangle,
  Text,
  Title,
  Wrapper,
  WrapperButton,
  Сontext,
} from './Hero.styled';
// import play from '../../images/hero/sprite.svg';

const Hero = () => {
  return (
    <>
      <Wrapper>
        <Сontext>
          <Title>The Sky Is The Limit</Title>

          <Text>We provide world class financial assistance</Text>

          {/* <Button type="button">
            <svg width="14px" height="18px">
                <use href={`${play}#play`}></use>
              </svg>
            Watch
          </Button> */}
        </Сontext>
      </Wrapper>
    </>
  );
};

export default Hero;
