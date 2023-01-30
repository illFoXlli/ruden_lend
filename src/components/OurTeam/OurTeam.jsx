import { Oval } from 'react-loader-spinner';
import { useImageLoaded } from '../../hooks/useImageLoaded';
import { imegesData } from './ImegesData';
import {
  Div,
  Img,
  Item,
  ItemImg,
  List,
  ListItem,
  Name,
  Position,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContact,
  WrapperContent,
  WrapperLoaded,
} from './OurTeam.styled';
import icons from '../../images/sprite.svg';
import { Container } from '../../page/HomePage/HomePage.styled';

const dataSvg = ['#facebook', '#twitter', '#youtube', '#in'];

const OurTeam = () => {
  const [ref, loaded, onLoad] = useImageLoaded();
  return (
    <>
      <Wrapper>
        <Container>
          <WrapperContent>
            <Preview>Who we are</Preview>
            <Title>Our Professional Team</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, sapiente!
            </Text>
          </WrapperContent>
          <ListItem>
            {imegesData.map(
              ({
                name,
                position,
                imgSm1x,
                imgSm2x,
                imgWeb1x,
                imgWeb2x,
                imgMd1x,
                imgMd2x,
                imgLg1x,
                imgLg2x,
              }) => (
                <ItemImg key={name}>
                  <picture>
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 1360px)"
                      srcSet={`
                    ${imgLg1x} 1x,
                    ${imgLg2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 768px)"
                      srcSet={`
                    ${imgMd1x} 1x,
                    ${imgMd2x} 2x
                  `}
                    />
                    <Img
                      ref={ref}
                      onLoad={onLoad}
                      type="image/web"
                      srcSet={`
                       ${imgWeb1x} 2x,
                       ${imgWeb2x} 1x,
                       `}
                      src={imgSm1x}
                      alt="фото"
                    />
                    {loaded && (
                      <WrapperLoaded>
                        <Oval
                          height={80}
                          width={80}
                          color="#fff"
                          wrapperStyle={{}}
                          wrapperClass=""
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="#4fa94d"
                          strokeWidth={2}
                          strokeWidthSecondary={2}
                        />
                      </WrapperLoaded>
                    )}
                  </picture>

                  <Div>
                    <List>
                      {dataSvg.map(image => (
                        <Item key={image}>
                          <svg>
                            <use href={`${icons}${image}`}></use>
                          </svg>
                        </Item>
                      ))}
                    </List>
                  </Div>
                  <WrapperContact>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                  </WrapperContact>
                </ItemImg>
              )
            )}
          </ListItem>
        </Container>
      </Wrapper>
    </>
  );
};

export default OurTeam;
