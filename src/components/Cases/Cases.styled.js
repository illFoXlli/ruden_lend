import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Wrapper = styled.div`
  padding-bottom: 40px;
  padding-top: 56px;

  ${props => props.theme.breakpoints.tab} {
    padding-top: 48px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const WrapperContent = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ListItem = styled.ul`
  display: flex;
  gap: 17px;
  flex-direction: column;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
    flex-direction: initial;
    flex-wrap: wrap;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Item = styled.li`
  position: relative;

  flex-basis: calc((100% - 18 * 2) / 3);
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled(LazyLoadImage)`
  /* width: 280px; */
  /* height: 176px; */
  display: block;
  cursor: pointer;

  margin-left: auto;
  margin-right: auto;

  width: 100%;
  height: 100%;

  /* object-fit: cover; */
  object-position: center;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
    filter: brightness(1.2);
  }
  ${props => props.theme.breakpoints.tab} {
    width: 223px;
    height: 148px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 420px;
    height: 280px;
  }
`;

export const WrapperLoaded = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Preview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.fontWeights.normal};
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
  }
  ${props => props.theme.colors.main} {
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.xlx};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 16px;
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.xll};
    width: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 24px;
  margin-bottom: 31px;
  width: 207px;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
    margin-bottom: 30px;
    width: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
    margin-bottom: 36px;
  }
`;
