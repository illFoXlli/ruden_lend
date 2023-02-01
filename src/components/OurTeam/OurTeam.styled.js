import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from '../../page/HomePage/HomePage.styled';

export const Wrapper = styled(Container)`
  padding-bottom: 50px;
  padding-top: 75px;

  ${props => props.theme.breakpoints.tab} {
    padding-top: 50px;
    padding-bottom: 40px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-top: 80px;
    padding-bottom: 88px;
  }
`;

export const WrapperContent = styled.div`
  text-align: center;
  margin-bottom: 63px;
  ${props => props.theme.breakpoints.tab} {
    margin-bottom: 24px;
  }
  ${props => props.theme.breakpoints.desc} {
    margin-bottom: 36px;
  }
`;

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  ${props => props.theme.breakpoints.tab} {
    flex-direction: row;
    gap: 18px;
    justify-content: center;
  }
  ${props => props.theme.breakpoints.desc} {
    gap: 20px;
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Name = styled.h3`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.main};
  font-weight: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
    margin-top: 16px;
    font-size: ${p => p.theme.fontSizes.xlx};
  }
  ${props => props.theme.breakpoints.desc} {
    margin-top: 14px;
  }
`;

export const Position = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.main};
  font-weight: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled(LazyLoadImage)`
  /* width: 280px;
  height: 186px; */
  width: 100%;
  height: 100%;
  display: block;

  object-fit: cover;
  object-position: center;

  ${props => props.theme.breakpoints.tab} {
    width: 223px;
    height: 148px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 420px;
    height: 287px;
  }
`;

export const Preview = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ml};
  }
  ${props => props.theme.colors.main} {
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.xlx};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 16px;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.xll};
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 24px;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
  transition-property: all;
  transition-duration: 960ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
`;
export const Item = styled.li`
  svg {
    width: 35px;
    height: 35px;
    fill: #ffffff;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
    :focus,
    :hover {
      fill: rgba(255, 255, 255, 0.6);
    }
    use {
    }
  }
`;
export const ItemImg = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const WrapperLoaded = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 280px;
  height: 186px; */
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  transition-property: all;
  transition-duration: 960ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :hover {
    opacity: 1;
    ${List} {
      opacity: 1;
    }
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
  }
  :hover ~ ${List} {
    opacity: 1;
  }

  ${props => props.theme.breakpoints.tab} {
    width: 223px;
    height: 148px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 420px;
    height: 287px;
  }
`;
