import styled from 'styled-components';
import hero from '../../images/hero/Rectangle.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding-left: -20px; */
  background-image: url(${hero});
  padding-top: 100px;
  height: 533px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -116px;

  /* &#home {
    padding-top: 100px;
    margin-top: -100px;

    -webkit-background-clip: content-box;
    background-clip: content-box;
  } */
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
export const Сontext = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xll};
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-top: 62px;
  width: 240px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heroText};

  text-align: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 15px 30px;
  border: 0;

  box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
  border-radius: 100px;
  cursor: pointer;
  background-image: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);

  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :focus,
  :hover {
    box-shadow: 0px 3px 20px 1px #26fff2;
    background-image: linear-gradient(316.53deg, #326cff 13.2%, #26fff2 71.54%);
  }
  :active {
    transition: 100ms cubic-bezier(0.43, 0.21, 0, 1.03);
    transform: translateY(2px);
  }
`;
