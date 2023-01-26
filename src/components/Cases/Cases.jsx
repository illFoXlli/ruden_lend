import people1MMM1x from '../../images/cases/cases1MMM1x.jpg';
import people1MMM2x from '../../images/cases/cases1MMM2x.jpg';
import people1Web1x from '../../images/cases/cases1.webp';
import people1Web2x from '../../images/cases/cases1@2x.webp';
import people1LLL1x from '../../images/cases/cases1LLLx1.jpg';
import people1LLL2x from '../../images/cases/cases1LLLx2.jpg';
import people1XXX1x from '../../images/cases/cases1XXXx1.jpg';
import people1XXX2x from '../../images/cases/cases1XXXx2.jpg';

import people2MMM1x from '../../images/cases/cases2MMMx1.jpg';
import people2MMM2x from '../../images/cases/cases2MMMx2.jpg';
import people2Web1x from '../../images/cases/cases2.webp';
import people2Web2x from '../../images/cases/cases2@2x.webp';
import people2LLL1x from '../../images/cases/cases2LLLx1.jpg';
import people2LLL2x from '../../images/cases/cases2LLLx2.jpg';
import people2XXX1x from '../../images/cases/cases2XXXx1.jpg';
import people2XXX2x from '../../images/cases/cases2XXXx2.jpg';

import people3MMM1x from '../../images/cases/cases3MMMx1.jpg';
import people3MMM2x from '../../images/cases/cases3MMMx2.jpg';
import people3Web1x from '../../images/cases/cases3.webp';
import people3Web2x from '../../images/cases/cases3@2x.webp';
import people3LLL1x from '../../images/cases/cases3LLLx1.jpg';
import people3LLL2x from '../../images/cases/cases3LLLx2.jpg';
import people3XXX1x from '../../images/cases/cases3XXXx1.jpg';
import people3XXX2x from '../../images/cases/cases3XXXx2.jpg';

import people4MMM1x from '../../images/cases/cases4MMMx1.jpg';
import people4MMM2x from '../../images/cases/cases4MMMx2.jpg';
import people4Web1x from '../../images/cases/cases4.webp';
import people4Web2x from '../../images/cases/cases4@2x.webp';
import people4LLL1x from '../../images/cases/cases4LLLx1.jpg';
import people4LLL2x from '../../images/cases/cases4LLLx2.jpg';
import people4XXX1x from '../../images/cases/cases4XXXx1.jpg';
import people4XXX2x from '../../images/cases/cases4XXXx2.jpg';

import people5MMM1x from '../../images/cases/cases5MMMx1.jpg';
import people5MMM2x from '../../images/cases/cases5MMMx2.jpg';
import people5Web1x from '../../images/cases/cases5.webp';
import people5Web2x from '../../images/cases/cases5@2x.webp';
import people5LLL1x from '../../images/cases/cases5LLLx1.jpg';
import people5LLL2x from '../../images/cases/cases5LLLx2.jpg';
import people5XXX1x from '../../images/cases/cases5XXXx1.jpg';
import people5XXX2x from '../../images/cases/cases5XXXx2.jpg';

import people6MMM1x from '../../images/cases/cases6MMMx1.jpg';
import people6MMM2x from '../../images/cases/cases6MMMx2.jpg';
import people6Web1x from '../../images/cases/cases6.webp';
import people6Web2x from '../../images/cases/cases6@2x.webp';
import people6LLL1x from '../../images/cases/cases6LLLx1.jpg';
import people6LLL2x from '../../images/cases/cases6LLLx2.jpg';
import people6XXX1x from '../../images/cases/cases6XXXx1.jpg';
import people6XXX2x from '../../images/cases/cases6XXXx2.jpg';
import {
  Img,
  ListItem,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContent,
} from './Cases.styled';

const Cases = () => {
  return (
    <>
      <Wrapper>
        <WrapperContent>
          <Preview>This is what we do</Preview>
          <Title>Business Cases</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
        </WrapperContent>
        <div>
          <ListItem>
            <li>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people1XXX1x} 1x,
                    ${people1XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people1LLL1x} 1x,
                    ${people1LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people1MMM1x} 1x,
                    ${people1MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people1Web2x} 2x,
            ${people1Web1x} 1x,
            `}
                  src={people1Web1x}
                  alt="фото"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people2XXX1x} 1x,
                    ${people2XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people2LLL1x} 1x,
                    ${people2LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people2MMM1x} 1x,
                    ${people2MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people2Web2x} 2x,
            ${people2Web1x} 1x,
            `}
                  src={people2Web1x}
                  alt="фото"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people3XXX1x} 1x,
                    ${people3XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people3LLL1x} 1x,
                    ${people3LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people3MMM1x} 1x,
                    ${people3MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people3Web2x} 2x,
            ${people3Web1x} 1x,
            `}
                  src={people3Web1x}
                  alt="фото"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people4XXX1x} 1x,
                    ${people4XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people4LLL1x} 1x,
                    ${people4LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people4MMM1x} 1x,
                    ${people4MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people4Web2x} 2x,
            ${people4Web1x} 1x,
            `}
                  src={people4Web1x}
                  alt="фото"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people5XXX1x} 1x,
                    ${people5XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people5LLL1x} 1x,
                    ${people5LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people5MMM1x} 1x,
                    ${people5MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people5Web2x} 2x,
            ${people5Web1x} 1x,
            `}
                  src={people5Web1x}
                  alt="фото"
                />
              </picture>
            </li>
            <li>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people6XXX1x} 1x,
                    ${people6XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people6LLL1x} 1x,
                    ${people6LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people6MMM1x} 1x,
                    ${people6MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people6Web2x} 2x,
            ${people6Web1x} 1x,
            `}
                  src={people6Web1x}
                  alt="фото"
                />
              </picture>
            </li>
          </ListItem>
        </div>
      </Wrapper>
      <div className="slide-container"></div>
    </>
  );
};

export default Cases;
