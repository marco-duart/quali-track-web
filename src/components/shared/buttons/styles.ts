import styled from "styled-components";

export const BaseButtonStyle = styled.button`
  width: ${(props) => props.theme.widths.buttons.xxxl};
  height: ${(props) => props.theme.heights.buttons.sm};
  background-color: ${(props) => props.theme.colors.lightBlue100};
  border: none;
  border-radius: ${(props) => props.theme.radius.xl};
  color: ${(props) => props.theme.colors.black100};
  font-family: ${(props) => props.theme.fontFamily.Sora};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.weights.black};
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.white};
  }
`;
