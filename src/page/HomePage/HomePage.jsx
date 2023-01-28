import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import {
  Container,
  Main,
  SectionBloge,
  SectionBlogeBlue,
  SectionCases,
  SectionCollbackForm,
  SectionFooter,
  SectionHero,
  SectionOurTeam,
} from './HomePage.styled';
import Blog from '../../components/Blog';
import BlogBlue from '../../components/BlogBlue';
import Cases from '../../components/Cases';
import OurTeam from '../../components/OurTeam';
import CollbackForm from '../../components/CollbackForm';
import Footer from '../../components/Footer';
const HomePage = () => {
  return (
    <>
      <Header />

      <SectionHero id="home">
        {/* <Container> */}
        <Hero />
        {/* </Container> */}
      </SectionHero>

      <Main>
        <SectionBloge id="about">
          <Blog />
        </SectionBloge>
        <SectionCases id="cases">
          <Container>
            <Cases />
          </Container>
        </SectionCases>
        <SectionBlogeBlue id="blog">
          <BlogBlue />
        </SectionBlogeBlue>
        {/* <SectionOurTeam id="about">
          <Container>
            <OurTeam />
          </Container>
        </SectionOurTeam>
        <SectionCollbackForm>
          <Container>
            <CollbackForm />
          </Container>
        </SectionCollbackForm> */}
      </Main>
      {/* <SectionFooter id="contact">
        <Container>
          <Footer />
        </Container>
      </SectionFooter> */}
    </>
  );
};

export default HomePage;
