import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 101;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 60px 0px 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
  @media (max-width: 900px) {
    padding: 0;
  }
`;

export const SpanClose = styled.span`
  color: #fff;
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 40px;
  font-weight: bold;
  /* opacity: 0.2; */
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const NavigationPrev = styled.span`
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  left: 0;
  :hover {
    opacity: 1;
  }
  @media (hover: none) {
    opacity: 0.2;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const NavigationNext = styled.span`
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  right: 0;
  :hover {
    opacity: 1;
  }
  @media (hover: none) {
    opacity: 0.2;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Content = styled.div`
  margin: auto;
  padding: 0;
  width: 90%;
  height: 100%;
  max-height: 100%;
  text-align: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Slide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  border: 9px solid #fff;
  border-radius: 4px;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
