import styled from 'styled-components';

export const SpanZero = styled.span`
  & > svg {
    width: 39px;
    height: 31px;
  }
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SpanOne = styled.span`
  color: ${props => props.theme.colors.accent};
  font-size: 28px;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SpanTwo = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 28px;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;

  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    ${SpanTwo}, ${SpanOne}, ${SpanZero} {
      transform: scale(1.02);
    }
  }
  &:hover > span {
    text-shadow: 2px 3px 20px #fff;
    stroke: #fff;
  }

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
