import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 101;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 10px 0px 10px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;

  ${props => props.theme.breakpoints.tab} {
    padding: 0px 60px 0px 60px;
  }

  ${props => props.theme.breakpoints.desc} {
    padding: 0px 80px 0px 80px;
  }
`;

export const SpanClose = styled.span`
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-100%, 100%);
  display: block;
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.9;
  cursor: pointer;

  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :hover {
    opacity: 1;
  }
  ${props => props.theme.breakpoints.tab} {
    opacity: 0.5;
    transform: translate(-100%, 120%);
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const NavigationPrev = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(10%, -50%);
  height: 80%;
  color: white;
  cursor: pointer;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  left: 0;

  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :hover {
    opacity: 1;
  }

  ${props => props.theme.breakpoints.tab} {
    opacity: 0.2;
    transform: translate(-90%, -50%);
    font-size: 100px;
    line-height: 100px;
    :hover {
      opacity: 1;
    }
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const NavigationNext = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(-10%, -50%);
  height: 80%;
  color: white;
  cursor: pointer;

  font-size: 60px;
  line-height: 60px;

  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  right: 0;

  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :hover {
    opacity: 1;
  }

  ${props => props.theme.breakpoints.tab} {
    opacity: 0.2;
    transform: translate(90%, -50%);
    font-size: 100px;
    line-height: 100px;
    :hover {
      opacity: 1;
    }
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Content = styled.div`
  margin: auto;
  padding: 0;
  text-align: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  /* width: calc(${props => props.width}px - 20px); */

  width: ${({ width, height }) =>
    height < width * 0.6285 + 100 - 20
      ? `${(height - 100) * 1.591}px`
      : `${width - 20}px`};

  height: ${({ width, height }) =>
    height < width * 0.6285 - 20 + 100
      ? `${height - 100}px`
      : `${width * 0.6285 - 20}px`};

  user-select: none;
  border: 5px solid #fff;
  border-radius: 4px;
  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  ${props => props.theme.breakpoints.tab} {
    /* width: ${({ width }) => (width < 1000 ? `${width - 160}px` : '840px')};*/
    width: ${({ width, height }) =>
      height < width * 0.69 - 160 + 100
        ? `${(height - 100) * 1.591}px`
        : `${width - 160}px`};

    height: ${({ width, height }) =>
      height < width * 0.69 - 160 + 100
        ? `${height - 100}px`
        : `${width * 0.69 - 160}px`};
    border: 7px solid #fff;
    border-radius: 4px;
  }

  ${props => props.theme.breakpoints.desc} {
    /* width: calc(1360px - 160px);
    height: ${(1360 - 160) * 0.6285}px; */

    width: ${({ width, height }) =>
      height < width * 0.69 - 160
        ? `${(height - 100) * 1.591}px`
        : `${1300 - 160}px`};

    height: ${({ width, height }) =>
      height < width * 0.69 - 160
        ? `${height - 100}px`
        : `${1300 * 0.69 - 160}px`};
    border: 9px solid #fff;
    border-radius: 4px;
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

export const Div = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
