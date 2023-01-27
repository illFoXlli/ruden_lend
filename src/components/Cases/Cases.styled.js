import styled from 'styled-components';
import prev from '../../images/gallery/prev.png';
import close from '../../images/gallery/close.png';
import ImageViewer from 'react-simple-image-viewer';

export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-top: 56px;
  background: #f4f4f4;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContent = styled.div`
  text-align: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  width: 280px;
  height: 176px;
  display: block;

  max-width: 100%;
  height: auto;

  object-fit: cover;
  object-position: center;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
    filter: brightness(1.1);
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

export const Preview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
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
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Prev = styled.div`
  width: 50px;
  height: 50px;

  background-image: url(${prev});
  background-color: white;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Close = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 200%;
  /* background-image: url(${close}); */
  background-color: white;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ImageViewerNew = styled(ImageViewer)`
  position: relative;
  z-index: 1000;
  background: green;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
