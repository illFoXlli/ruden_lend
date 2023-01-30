import {
  Container,
  Div,
  Main,
  SectionBloge,
  SectionBlogeBlue,
  SectionCases,
  SectionCollbackForm,
  SectionFooter,
  SectionHero,
  SectionOurTeam,
} from './HomePage.styled';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Blog from '../../components/Blog';
import BlogBlue from '../../components/BlogBlue';
import Cases from '../../components/Cases';
import OurTeam from '../../components/OurTeam';
import Footer from '../../components/Footer';
import CollbackForm from '../../components/CollbackForm/CollbackForm';
import { useState } from 'react';

const HomePage = () => {
  const [show, setShow] = useState(null);

  return (
    <>
      <Div show={show}>
        <Header />
        <SectionHero id="home">
          <Hero />
        </SectionHero>
        <Main>
          <SectionBloge id="about">
            <Blog />
          </SectionBloge>
          <SectionCases id="cases">
            <Container>
              <Cases setShow={setShow} />
            </Container>
          </SectionCases>
          <SectionBlogeBlue id="blog">
            <BlogBlue />
          </SectionBlogeBlue>
          <SectionOurTeam id="about">
            <OurTeam />
          </SectionOurTeam>
          <SectionCollbackForm>
            <CollbackForm />
          </SectionCollbackForm>
        </Main>
        <SectionFooter id="contact">
          <Footer />
        </SectionFooter>
      </Div>
    </>
  );
};

export default HomePage;
