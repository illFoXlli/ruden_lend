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
import Footer from '../../components/Footer';
import CollbackForm from '../../components/CollbackForm/CollbackForm';

const HomePage = () => {
  return (
    <>
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
            <Cases />
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
    </>
  );
};

export default HomePage;
