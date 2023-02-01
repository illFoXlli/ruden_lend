import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background: #333333;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
    max-width: 1360px;
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;
export const Item = styled.li`
  cursor: pointer;
  svg {
    width: 35px;
    height: 35px;
    fill: #ffffff;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
    :focus,
    :hover {
      fill: #28a745;
    }
    use {
    }
  }
`;
export const Text = styled.p`
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
