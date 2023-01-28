import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;

  z-index: 100;

  padding-top: 22px;
  padding-bottom: 22px;

  transition-property: background-color;
  transition-duration: 800ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  ${props => props.scroll <= 120} {
    background: rgba(55, 55, 57, 0.8);
  }

  ${props => props.theme.breakpoints.tab} {
    padding-top: 9px;
    padding-bottom: 9px;
    ${props => props.scroll <= 70} {
      background: rgba(55, 55, 57, 0.8);
    }
  }
  ${props => props.theme.breakpoints.desc} {
    width: 1360px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Wrapper = styled.div`
  ${props => props.theme.breakpoints.tab} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperLogo = styled.div`
  margin-bottom: 16px;
  ${props => props.theme.breakpoints.tab} {
    margin-bottom: 0px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-top: 32px;
    padding-bottom: 32px;
  }
`;
