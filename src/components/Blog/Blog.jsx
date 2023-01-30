import { Oval } from 'react-loader-spinner';
import { useImageLoaded } from '../../hooks/useImageLoaded';
import {
  Button,
  Div,
  Img,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContainer,
  WrapperContent,
  WrapperLoaded,
} from './Blog.styles';
import peopleXXX1x from '../../images/blog/RectangleXXX1x.jpg';
import peopleXXX2x from '../../images/blog/RectangleXXX2x.jpg';
import peopleLLL1x from '../../images/blog/RectangleLLL1x.jpg';
import peopleLLL2x from '../../images/blog/RectangleLLL2x.jpg';
import peopleMMM1x from '../../images/blog/RectangleMMM1x.jpg';
import peopleWeb1x from '../../images/blog/people.webp';
import peopleWeb2x from '../../images/blog/people@2x.webp';

const Blog = () => {
  const [ref, loaded, onLoad] = useImageLoaded();
  return (
    <>
      <Wrapper>
        <Div>
          <picture>
            <source
              type="image/jpeg"
              media="screen and (min-width: 1360px)"
              srcSet={`
                    ${peopleXXX1x} 1x,
                    ${peopleXXX2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 769px)"
              srcSet={`
                    ${peopleXXX1x} 1x,
                    ${peopleXXX2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 768px)"
              srcSet={`
                    ${peopleLLL1x} 1x,
                    ${peopleLLL2x} 2x
                  `}
            />

            <Img
              ref={ref}
              onLoad={onLoad}
              type="image/web"
              srcSet={`
            ${peopleWeb2x} 2x,
            ${peopleWeb1x} 1x,
            `}
              src={peopleMMM1x}
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
        </Div>

        <WrapperContainer>
          <WrapperContent>
            <Preview>What you are looking for</Preview>
            <Title>We provide bespoke solutions</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button>Read More</Button>
          </WrapperContent>
        </WrapperContainer>
      </Wrapper>
    </>
  );
};

export default Blog;
