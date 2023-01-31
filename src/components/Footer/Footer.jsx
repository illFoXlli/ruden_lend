import { Wrapper, List, Text, Item } from './Footer.styled';
import icons from '../../images/sprite.svg';
const Footer = () => {
  const dataSvg = ['#facebook', '#twitter', '#youtube', '#in'];
  const dataHref = [
    'https://uk-ua.facebook.com/',
    'https://twitter.com/',
    'https://www.youtube.com/',
    'https://www.linkedin.com/feed/',
  ];
  return (
    <Wrapper>
      <List>
        {dataSvg.map((image, i) => (
          <Item key={image}>
            <a href={dataHref[i]} target="_blank" rel="noreferrer">
              <svg>
                <use href={`${icons}${image}`}></use>
              </svg>
            </a>
          </Item>
        ))}
      </List>
      <Text>Copyright © 2021 - FinanceLedger</Text>
    </Wrapper>
  );
};

export default Footer;
