import styled from 'styled-components';

export const Div = styled.div`
  overflow-y: ${({ show }) => (!show ? `none` : 'overlay')};
  height: ${({ show }) => (show ? `100vh` : '100%')};
`;

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  ${props => props.theme.breakpoints.tab} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  ${props => props.theme.breakpoints.desc} {
    max-width: 1360px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const Main = styled.main`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionHero = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionBloge = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionCases = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionOurTeam = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionBlogeBlue = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionCollbackForm = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionFooter = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
