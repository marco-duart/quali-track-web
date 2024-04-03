import styled from "styled-components";

export const RegisterPageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: ${props => props.theme.colors.pink100};
  background-position: 50% 0;
  display: grid;
  place-items: center;
`;

export const CandyStoreLogoStyle = styled.div`
  position: absolute;
  width: 200px;
  left: 50%;
  margin-left: -275px;
  top: -150px;
`

export const FooterRegisterPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`